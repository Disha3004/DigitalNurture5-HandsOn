
CREATE OR REPLACE FUNCTION CalculateAge(
    p_DOB DATE
)
RETURN NUMBER
IS
    v_Age NUMBER;
BEGIN
    v_Age := TRUNC(MONTHS_BETWEEN(SYSDATE, p_DOB) / 12);
    RETURN v_Age;
END;
/

CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment(
    p_LoanAmount NUMBER,
    p_InterestRate NUMBER,
    p_Years NUMBER
)
RETURN NUMBER
IS
    v_Total NUMBER;
BEGIN
    v_Total := (p_LoanAmount +
               (p_LoanAmount * p_InterestRate * p_Years / 100))
               /(p_Years*12);

    RETURN ROUND(v_Total,2);
END;
/

CREATE OR REPLACE FUNCTION HasSufficientBalance(
    p_AccountID NUMBER,
    p_Amount NUMBER
)
RETURN VARCHAR2
IS
    v_Balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_AccountID;

    IF v_Balance >= p_Amount THEN
        RETURN 'TRUE';
    ELSE
        RETURN 'FALSE';
    END IF;

END;
/