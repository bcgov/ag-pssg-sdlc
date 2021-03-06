PRINT N'Create Sequences for Table Primary Keys'
GO

CREATE SEQUENCE [dbo].[PIMS_LEASE_TENANT_ID_SEQ]
	AS bigint
	START WITH 1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	NO CYCLE
	CACHE 50

CREATE SEQUENCE [dbo].[PIMS_LEASE_TENANT_H_ID_SEQ]
	AS bigint
	START WITH 1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	NO CYCLE
	CACHE 50