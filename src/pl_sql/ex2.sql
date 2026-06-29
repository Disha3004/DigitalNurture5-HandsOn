
CREATE OR REPLACE PROCEDURE SafeTransferFunds(
    p_FromAccount NUMBER,
    p_ToAccount NUMBER,
    p_Amount NUMBER
)
IS
    v_Balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccount;

    IF v_Balance < p_Amount THEN
        RAISE_APPLICATION_ERROR(-20001,'Insufficient Balance');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_Amount
    WHERE AccountID = p_FromAccount;

    UPDATE Accounts
    SET Balance = Balance + p_Amount
    WHERE AccountID = p_ToAccount;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Transfer Successful');

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/

CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_EmpID NUMBER,
    p_Percentage NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_Percentage/100)
    WHERE EmployeeID = p_EmpID;

    IF SQL%ROWCOUNT = 0 THEN
        RAISE_APPLICATION_ERROR(-20002,'Employee ID Not Found');
    END IF;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Salary Updated');

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/

CREATE OR REPLACE PROCEDURE AddNewCustomer(
    p_ID NUMBER,
    p_Name VARCHAR2,
    p_DOB DATE,
    p_Balance NUMBER
)
IS
BEGIN

    INSERT INTO Customers
    (CustomerID, Name, DOB, Balance, LastModified)
    VALUES
    (p_ID, p_Name, p_DOB, p_Balance, SYSDATE);

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Customer Added');

EXCEPTION

    WHEN DUP_VAL_ON_INDEX THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Customer ID Already Exists');

    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(SQLERRM);

END;
/

