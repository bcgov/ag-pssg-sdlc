PRINT N'Inserting [PIMS_LEASE_PMT_FREQ_TYPE]'
GO
INSERT INTO PIMS_LEASE_PMT_FREQ_TYPE (LEASE_PMT_FREQ_TYPE_CODE, DESCRIPTION)
VALUES
  (N'NOMINAL', N'Nominal'),
  (N'MONTHLY', N'Monthly'),
  (N'PREPAID', N'Prepaid'),
  (N'ANNUAL', N'Annual');
