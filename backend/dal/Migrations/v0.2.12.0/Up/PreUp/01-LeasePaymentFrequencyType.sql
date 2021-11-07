-- Drop foreign key constraint dbo.PIM_LSPMTF_PIM_LEASE_FK
PRINT N'Drop foreign key constraint dbo.PIM_LSPMTF_PIM_LEASE_FK'
GO
ALTER TABLE [dbo].[PIMS_LEASE]
	DROP CONSTRAINT [PIM_LSPMTF_PIM_LEASE_FK]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO


-- Drop primary key constraint dbo.LSPMTF_PK
PRINT N'Drop primary key constraint dbo.LSPMTF_PK'
GO
ALTER TABLE [dbo].[PIMS_LEASE_PMT_FREQ_TYPE]
	DROP CONSTRAINT [LSPMTF_PK]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO