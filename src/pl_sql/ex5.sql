CREATE TABLE AuditLog (
    LogID NUMBER PRIMARY KEY,
    TransactionID NUMBER,
    AccountID NUMBER,
    Action VARCHAR2(100),
    LogDate DATE
);


CREATE OR REPLACE TRIGGER UpdateCustomerLastModified
BEFORE UPDATE
ON Customers
FOR EACH ROW
BEGIN
    :NEW.LastModified := SYSDATE;
END;
/


CREATE OR REPLACE TRIGGER LogTransaction
AFTER INSERT
ON Transactions
FOR EACH ROW
BEGIN
    INSERT INTO AuditLog
    VALUES(
        :NEW.TransactionID,
        :NEW.TransactionID,
        :NEW.AccountID,
        'Transaction Inserted',
        SYSDATE
    );
END;
/

CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT
ON Transactions
FOR EACH ROW

DECLARE
    v_Balance NUMBER;

BEGIN

    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = :NEW.AccountID;

    IF :NEW.TransactionType='Withdrawal'
       AND :NEW.Amount > v_Balance THEN

        RAISE_APPLICATION_ERROR(
        -20003,
        'Insufficient Balance');

    ELSIF :NEW.TransactionType='Deposit'
          AND :NEW.Amount <=0 THEN

        RAISE_APPLICATION_ERROR(
        -20004,
        'Deposit Amount Must Be Positive');

    END IF;

END;
/