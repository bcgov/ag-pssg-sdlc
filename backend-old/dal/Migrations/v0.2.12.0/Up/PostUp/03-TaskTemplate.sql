CREATE TABLE [dbo].[ADS_SSDATA_1632946420637]  ( 
	[APP_CREATE_TIMESTAMP]          	datetime NOT NULL DEFAULT (getutcdate()),
	[APP_CREATE_USER_DIRECTORY]     	nvarchar(30) NOT NULL,
	[APP_CREATE_USER_GUID]          	uniqueidentifier NULL,
	[APP_CREATE_USERID]             	nvarchar(30) NOT NULL,
	[APP_LAST_UPDATE_TIMESTAMP]     	datetime NOT NULL DEFAULT (getutcdate()),
	[APP_LAST_UPDATE_USER_DIRECTORY]	nvarchar(30) NOT NULL,
	[APP_LAST_UPDATE_USER_GUID]     	uniqueidentifier NULL,
	[APP_LAST_UPDATE_USERID]        	nvarchar(30) NOT NULL,
	[CONCURRENCY_CONTROL_NUMBER]    	bigint NOT NULL DEFAULT ((1)),
	[DB_CREATE_TIMESTAMP]           	datetime NOT NULL DEFAULT (getutcdate()),
	[DB_CREATE_USERID]              	nvarchar(30) NOT NULL DEFAULT (user_name()),
	[DB_LAST_UPDATE_TIMESTAMP]      	datetime NOT NULL DEFAULT (getutcdate()),
	[DB_LAST_UPDATE_USERID]         	nvarchar(30) NOT NULL DEFAULT (user_name()),
	[IS_DISABLED]                   	bit NOT NULL DEFAULT (CONVERT([bit],(0))),
	[TASK_TEMPLATE_ID]              	bigint NOT NULL DEFAULT (NEXT VALUE FOR [PIMS_TASK_TEMPLATE_ID_SEQ]),
	[TASK_TEMPLATE_TYPE_CODE]       	nvarchar(20) NOT NULL,
	PRIMARY KEY CLUSTERED([TASK_TEMPLATE_ID])
 ON [PRIMARY])
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
INSERT INTO [dbo].[ADS_SSDATA_1632946420637]([APP_CREATE_TIMESTAMP], [APP_CREATE_USER_DIRECTORY], [APP_CREATE_USER_GUID], [APP_CREATE_USERID], [APP_LAST_UPDATE_TIMESTAMP], [APP_LAST_UPDATE_USER_DIRECTORY], [APP_LAST_UPDATE_USER_GUID], [APP_LAST_UPDATE_USERID], [CONCURRENCY_CONTROL_NUMBER], [DB_CREATE_TIMESTAMP], [DB_CREATE_USERID], [DB_LAST_UPDATE_TIMESTAMP], [DB_LAST_UPDATE_USERID], [IS_DISABLED], [TASK_TEMPLATE_ID], [TASK_TEMPLATE_TYPE_CODE]) 
	SELECT [APP_CREATE_TIMESTAMP], [APP_CREATE_USER_DIRECTORY], [APP_CREATE_USER_GUID], [APP_CREATE_USERID], [APP_LAST_UPDATE_TIMESTAMP], [APP_LAST_UPDATE_USER_DIRECTORY], [APP_LAST_UPDATE_USER_GUID], [APP_LAST_UPDATE_USERID], [CONCURRENCY_CONTROL_NUMBER], [DB_CREATE_TIMESTAMP], [DB_CREATE_USERID], [DB_LAST_UPDATE_TIMESTAMP], [DB_LAST_UPDATE_USERID], [IS_DISABLED], [TASK_TEMPLATE_ID], SUBSTRING(TASK_TEMPLATE_TYPE_CODE,1,20) 
	FROM [dbo].[PIMS_TASK_TEMPLATE]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
DROP TABLE [dbo].[PIMS_TASK_TEMPLATE]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
EXEC dbo.sp_rename N'[dbo].[ADS_SSDATA_1632946420637]', N'PIMS_TASK_TEMPLATE', [OBJECT]
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Create foreign key constraint dbo.PIM_TSKTMP_PIM_TASK_FK
PRINT N'Create foreign key constraint dbo.PIM_TSKTMP_PIM_TASK_FK'
GO
ALTER TABLE [dbo].[PIMS_TASK]
	ADD FOREIGN KEY([TASK_TEMPLATE_ID])
	REFERENCES [dbo].[PIMS_TASK_TEMPLATE]([TASK_TEMPLATE_ID])
	ON DELETE NO ACTION 
	ON UPDATE NO ACTION 
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

-- Create foreign key constraint dbo.PIM_TSKTMP_PIM_TSKTAM_FK
PRINT N'Create foreign key constraint dbo.PIM_TSKTMP_PIM_TSKTAM_FK'
GO
ALTER TABLE [dbo].[PIMS_TASK_TEMPLATE_ACTIVITY_MODEL]
	ADD FOREIGN KEY([TASK_TEMPLATE_ID])
	REFERENCES [dbo].[PIMS_TASK_TEMPLATE]([TASK_TEMPLATE_ID])
	ON DELETE NO ACTION 
	ON UPDATE NO ACTION 
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO