PRINT N'Add Triggers'
GO

-- Drop trigger dbo.PIMS_LEASE_I_S_I_TR
PRINT N'Drop trigger dbo.PIMS_LEASE_I_S_I_TR'
GO
DROP TRIGGER [dbo].[PIMS_LEASE_I_S_I_TR]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Drop trigger dbo.PIMS_LEASE_I_S_U_TR
PRINT N'Drop trigger dbo.PIMS_LEASE_I_S_U_TR'
GO
DROP TRIGGER [dbo].[PIMS_LEASE_I_S_U_TR]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Drop trigger dbo.PIMS_LEASE_A_S_IUD_TR
PRINT N'Drop trigger dbo.PIMS_LEASE_A_S_IUD_TR'
GO
DROP TRIGGER [dbo].[PIMS_LEASE_A_S_IUD_TR]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Create trigger dbo.PIMS_LEASE_A_S_IUD_TR
PRINT N'Create trigger dbo.PIMS_LEASE_A_S_IUD_TR'
GO
CREATE TRIGGER [dbo].[PIMS_LEASE_A_S_IUD_TR] ON PIMS_LEASE FOR INSERT, UPDATE, DELETE AS
SET NOCOUNT ON
BEGIN TRY
DECLARE @curr_date datetime;
SET @curr_date = getutcdate();
  IF NOT EXISTS(SELECT * FROM inserted) AND NOT EXISTS(SELECT * FROM deleted) 
    RETURN;

  -- historical
  IF EXISTS(SELECT * FROM deleted)
    update PIMS_LEASE_HIST set END_DATE_HIST = @curr_date where LEASE_ID in (select LEASE_ID from deleted) and END_DATE_HIST is null;
  
  IF EXISTS(SELECT * FROM inserted)
    insert into PIMS_LEASE_HIST ([LEASE_ID], [MOTI_NAME_ID], [LEASE_PAY_RVBL_TYPE_CODE], [LEASE_LICENSE_TYPE_CODE], [LEASE_CATEGORY_TYPE_CODE], [LEASE_PURPOSE_TYPE_CODE], [LEASE_PROGRAM_TYPE_CODE], [LEASE_PMT_FREQ_TYPE_CODE], [LEASE_PURPOSE_OTHER_DESC], [L_FILE_NO], [TFA_FILE_NO], [PS_FILE_NO], [LEASE_DESCRIPTION], [LEASE_NOTES], [ORIG_START_DATE], [ORIG_EXPIRY_DATE], [IS_ORIG_EXPIRY_REQUIRED], [TERM_START_DATE], [TERM_EXPIRY_DATE], [TERM_RENEWAL_DATE], [INCLUDED_RENEWALS], [RENEWAL_COUNT], [RENEWAL_TERM_MONTHS], [LEASE_AMOUNT], [INSPECTION_DATE], [INSPECTION_NOTES], [IS_EXPIRED], [HAS_PHYSICAL_FILE], [HAS_DIGITAL_FILE], [HAS_PHYSICAL_LICENSE], [HAS_DIGITAL_LICENSE], [CONCURRENCY_CONTROL_NUMBER], [APP_CREATE_TIMESTAMP], [APP_CREATE_USERID], [APP_CREATE_USER_GUID], [APP_CREATE_USER_DIRECTORY], [APP_LAST_UPDATE_TIMESTAMP], [APP_LAST_UPDATE_USERID], [APP_LAST_UPDATE_USER_GUID], [APP_LAST_UPDATE_USER_DIRECTORY], [DB_CREATE_TIMESTAMP], [DB_CREATE_USERID], [DB_LAST_UPDATE_TIMESTAMP], [DB_LAST_UPDATE_USERID], _LEASE_HIST_ID, END_DATE_HIST, EFFECTIVE_DATE_HIST)
      select [LEASE_ID], [MOTI_NAME_ID], [LEASE_PAY_RVBL_TYPE_CODE], [LEASE_LICENSE_TYPE_CODE], [LEASE_CATEGORY_TYPE_CODE], [LEASE_PURPOSE_TYPE_CODE], [LEASE_PROGRAM_TYPE_CODE], [LEASE_PMT_FREQ_TYPE_CODE], [LEASE_PURPOSE_OTHER_DESC], [L_FILE_NO], [TFA_FILE_NO], [PS_FILE_NO], [LEASE_DESCRIPTION], [LEASE_NOTES], [ORIG_START_DATE], [ORIG_EXPIRY_DATE], [IS_ORIG_EXPIRY_REQUIRED], [TERM_START_DATE], [TERM_EXPIRY_DATE], [TERM_RENEWAL_DATE], [INCLUDED_RENEWALS], [RENEWAL_COUNT], [RENEWAL_TERM_MONTHS], [LEASE_AMOUNT], [INSPECTION_DATE], [INSPECTION_NOTES], [IS_EXPIRED], [HAS_PHYSICAL_FILE], [HAS_DIGITAL_FILE], [HAS_PHYSICAL_LICENSE], [HAS_DIGITAL_LICENSE], [CONCURRENCY_CONTROL_NUMBER], [APP_CREATE_TIMESTAMP], [APP_CREATE_USERID], [APP_CREATE_USER_GUID], [APP_CREATE_USER_DIRECTORY], [APP_LAST_UPDATE_TIMESTAMP], [APP_LAST_UPDATE_USERID], [APP_LAST_UPDATE_USER_GUID], [APP_LAST_UPDATE_USER_DIRECTORY], [DB_CREATE_TIMESTAMP], [DB_CREATE_USERID], [DB_LAST_UPDATE_TIMESTAMP], [DB_LAST_UPDATE_USERID], (next value for [dbo].[PIMS_LEASE_H_ID_SEQ]) as [_LEASE_HIST_ID], null as [END_DATE_HIST], @curr_date as [EFFECTIVE_DATE_HIST] from inserted;

END TRY
BEGIN CATCH
   IF @@trancount > 0 ROLLBACK TRANSACTION
   EXEC pims_error_handling
END CATCH;
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Create trigger dbo.PIMS_LEASE_I_S_U_TR
PRINT N'Create trigger dbo.PIMS_LEASE_I_S_U_TR'
GO
CREATE TRIGGER [dbo].[PIMS_LEASE_I_S_U_TR] ON PIMS_LEASE INSTEAD OF UPDATE AS
SET NOCOUNT ON
BEGIN TRY
  IF NOT EXISTS(SELECT * FROM deleted) 
    RETURN;

  -- validate concurrency control
  if exists (select 1 from inserted, deleted where inserted.CONCURRENCY_CONTROL_NUMBER != deleted.CONCURRENCY_CONTROL_NUMBER+1 AND inserted.LEASE_ID = deleted.LEASE_ID)
    raiserror('CONCURRENCY FAILURE.',16,1)


  -- update statement
  update PIMS_LEASE
    set "LEASE_ID" = inserted."LEASE_ID",
      "MOTI_NAME_ID" = inserted."MOTI_NAME_ID",
      "LEASE_PAY_RVBL_TYPE_CODE" = inserted."LEASE_PAY_RVBL_TYPE_CODE",
      "LEASE_LICENSE_TYPE_CODE" = inserted."LEASE_LICENSE_TYPE_CODE",
      "LEASE_CATEGORY_TYPE_CODE" = inserted."LEASE_CATEGORY_TYPE_CODE",
      "LEASE_PURPOSE_TYPE_CODE" = inserted."LEASE_PURPOSE_TYPE_CODE",
      "LEASE_PROGRAM_TYPE_CODE" = inserted."LEASE_PROGRAM_TYPE_CODE",
      "LEASE_PMT_FREQ_TYPE_CODE" = inserted."LEASE_PMT_FREQ_TYPE_CODE",
      "LEASE_PURPOSE_OTHER_DESC" = inserted."LEASE_PURPOSE_OTHER_DESC",
      "L_FILE_NO" = inserted."L_FILE_NO",
      "TFA_FILE_NO" = inserted."TFA_FILE_NO",
      "PS_FILE_NO" = inserted."PS_FILE_NO",
      "LEASE_DESCRIPTION" = inserted."LEASE_DESCRIPTION",
      "LEASE_NOTES" = inserted."LEASE_NOTES",
      "ORIG_START_DATE" = inserted."ORIG_START_DATE",
      "ORIG_EXPIRY_DATE" = inserted."ORIG_EXPIRY_DATE",
      "IS_ORIG_EXPIRY_REQUIRED" = inserted."IS_ORIG_EXPIRY_REQUIRED",
      "TERM_START_DATE" = inserted."TERM_START_DATE",
      "TERM_EXPIRY_DATE" = inserted."TERM_EXPIRY_DATE",
      "TERM_RENEWAL_DATE" = inserted."TERM_RENEWAL_DATE",
      "INCLUDED_RENEWALS" = inserted."INCLUDED_RENEWALS",
      "RENEWAL_COUNT" = inserted."RENEWAL_COUNT",
      "RENEWAL_TERM_MONTHS" = inserted."RENEWAL_TERM_MONTHS",
      "LEASE_AMOUNT" = inserted."LEASE_AMOUNT",
      "INSPECTION_DATE" = inserted."INSPECTION_DATE",
      "INSPECTION_NOTES" = inserted."INSPECTION_NOTES",
      "IS_EXPIRED" = inserted."IS_EXPIRED",
      "HAS_PHYSICAL_FILE" = inserted."HAS_PHYSICAL_FILE",
      "HAS_DIGITAL_FILE" = inserted."HAS_DIGITAL_FILE",
      "HAS_PHYSICAL_LICENSE" = inserted."HAS_PHYSICAL_LICENSE",
      "HAS_DIGITAL_LICENSE" = inserted."HAS_DIGITAL_LICENSE",
      "CONCURRENCY_CONTROL_NUMBER" = inserted."CONCURRENCY_CONTROL_NUMBER",
      "APP_LAST_UPDATE_TIMESTAMP" = inserted."APP_LAST_UPDATE_TIMESTAMP",
      "APP_LAST_UPDATE_USERID" = inserted."APP_LAST_UPDATE_USERID",
      "APP_LAST_UPDATE_USER_GUID" = inserted."APP_LAST_UPDATE_USER_GUID",
      "APP_LAST_UPDATE_USER_DIRECTORY" = inserted."APP_LAST_UPDATE_USER_DIRECTORY"
    , DB_LAST_UPDATE_TIMESTAMP = getutcdate()
    , DB_LAST_UPDATE_USERID = user_name()
    from PIMS_LEASE
    inner join inserted
    on (PIMS_LEASE.LEASE_ID = inserted.LEASE_ID);

END TRY
BEGIN CATCH
   IF @@trancount > 0 ROLLBACK TRANSACTION
   EXEC pims_error_handling
END CATCH;
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Create trigger dbo.PIMS_LEASE_I_S_I_TR
PRINT N'Create trigger dbo.PIMS_LEASE_I_S_I_TR'
GO
CREATE TRIGGER [dbo].[PIMS_LEASE_I_S_I_TR] ON PIMS_LEASE INSTEAD OF INSERT AS
SET NOCOUNT ON
BEGIN TRY
  IF NOT EXISTS(SELECT * FROM inserted) 
    RETURN;

  
  insert into PIMS_LEASE ("LEASE_ID",
      "MOTI_NAME_ID",
      "LEASE_PAY_RVBL_TYPE_CODE",
      "LEASE_LICENSE_TYPE_CODE",
      "LEASE_CATEGORY_TYPE_CODE",
      "LEASE_PURPOSE_TYPE_CODE",
      "LEASE_PROGRAM_TYPE_CODE",
      "LEASE_PMT_FREQ_TYPE_CODE",
      "LEASE_PURPOSE_OTHER_DESC",
      "L_FILE_NO",
      "TFA_FILE_NO",
      "PS_FILE_NO",
      "LEASE_DESCRIPTION",
      "LEASE_NOTES",
      "ORIG_START_DATE",
      "ORIG_EXPIRY_DATE",
      "IS_ORIG_EXPIRY_REQUIRED",
      "TERM_START_DATE",
      "TERM_EXPIRY_DATE",
      "TERM_RENEWAL_DATE",
      "INCLUDED_RENEWALS",
      "RENEWAL_COUNT",
      "RENEWAL_TERM_MONTHS",
      "LEASE_AMOUNT",
      "INSPECTION_DATE",
      "INSPECTION_NOTES",
      "IS_EXPIRED",
      "HAS_PHYSICAL_FILE",
      "HAS_DIGITAL_FILE",
      "HAS_PHYSICAL_LICENSE",
      "HAS_DIGITAL_LICENSE",
      "CONCURRENCY_CONTROL_NUMBER",
      "APP_CREATE_TIMESTAMP",
      "APP_CREATE_USERID",
      "APP_CREATE_USER_GUID",
      "APP_CREATE_USER_DIRECTORY",
      "APP_LAST_UPDATE_TIMESTAMP",
      "APP_LAST_UPDATE_USERID",
      "APP_LAST_UPDATE_USER_GUID",
      "APP_LAST_UPDATE_USER_DIRECTORY")
    select "LEASE_ID",
      "MOTI_NAME_ID",
      "LEASE_PAY_RVBL_TYPE_CODE",
      "LEASE_LICENSE_TYPE_CODE",
      "LEASE_CATEGORY_TYPE_CODE",
      "LEASE_PURPOSE_TYPE_CODE",
      "LEASE_PROGRAM_TYPE_CODE",
      "LEASE_PMT_FREQ_TYPE_CODE",
      "LEASE_PURPOSE_OTHER_DESC",
      "L_FILE_NO",
      "TFA_FILE_NO",
      "PS_FILE_NO",
      "LEASE_DESCRIPTION",
      "LEASE_NOTES",
      "ORIG_START_DATE",
      "ORIG_EXPIRY_DATE",
      "IS_ORIG_EXPIRY_REQUIRED",
      "TERM_START_DATE",
      "TERM_EXPIRY_DATE",
      "TERM_RENEWAL_DATE",
      "INCLUDED_RENEWALS",
      "RENEWAL_COUNT",
      "RENEWAL_TERM_MONTHS",
      "LEASE_AMOUNT",
      "INSPECTION_DATE",
      "INSPECTION_NOTES",
      "IS_EXPIRED",
      "HAS_PHYSICAL_FILE",
      "HAS_DIGITAL_FILE",
      "HAS_PHYSICAL_LICENSE",
      "HAS_DIGITAL_LICENSE",
      "CONCURRENCY_CONTROL_NUMBER",
      "APP_CREATE_TIMESTAMP",
      "APP_CREATE_USERID",
      "APP_CREATE_USER_GUID",
      "APP_CREATE_USER_DIRECTORY",
      "APP_LAST_UPDATE_TIMESTAMP",
      "APP_LAST_UPDATE_USERID",
      "APP_LAST_UPDATE_USER_GUID",
      "APP_LAST_UPDATE_USER_DIRECTORY"
    from inserted;

END TRY
BEGIN CATCH
   IF @@trancount > 0 ROLLBACK TRANSACTION
   EXEC pims_error_handling
END CATCH;
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO