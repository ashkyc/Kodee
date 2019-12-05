USE [Kodee]
GO
/****** Object:  Table [dbo].[Addresses2]    Script Date: 12/5/2019 2:08:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Addresses2](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Address] [nvarchar](500) NOT NULL,
	[Lat] [float] NOT NULL,
	[Lng] [float] NOT NULL,
	[DateCreated] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Addresses2] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Addresses2] ON 

INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (1, N'New York, NY, USA', 12.132, 123.12312, CAST(N'2019-12-04T09:09:27.4266667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (2, N'3401 South Harbor Boulevard, Santa Ana, CA, USA', 33.701128, -117.91826759999998, CAST(N'2019-12-04T09:15:32.9033333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (3, N'San Francisco, CA, USA', 37.7749295, -122.41941550000001, CAST(N'2019-12-04T09:23:08.9700000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (4, N'New York, NY, USA', 40.7127753, -74.0059728, CAST(N'2019-12-04T21:02:23.9433333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (5, N'Washington D.C., DC, USA', 38.9071923, -77.036870700000009, CAST(N'2019-12-04T21:15:20.5766667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (6, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T05:48:47.4833333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (7, N'New Orleans, LA, USA', 29.951065799999991, -90.0715323, CAST(N'2019-12-05T05:49:12.8433333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (8, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T05:50:23.7333333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (9, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T05:53:50.4266667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (10, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T05:54:33.7500000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (12, N'Laguna Beach, CA, USA', 33.5427189, -117.78535679999999, CAST(N'2019-12-05T05:57:21.5333333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (13, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T05:58:39.6900000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (14, N'Los Angeles, CA, USA', 34.0522342, -118.2436849, CAST(N'2019-12-05T05:59:06.6000000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (15, N'Newport Beach Pier, Newport Pier, Newport Beach, CA, USA', 33.6074608, -117.9288133, CAST(N'2019-12-05T06:07:44.2100000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (16, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:09:02.1566667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (17, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:16:45.6000000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (18, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:18:34.8433333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (19, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:19:16.9700000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (20, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:20:16.6500000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (21, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:20:40.3933333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (22, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:22:31.2600000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (23, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:23:33.5733333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (24, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:23:49.3000000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (25, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:42:38.5500000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (26, N'Seattle, WA, USA', 47.6062095, -122.3320708, CAST(N'2019-12-05T06:43:10.0833333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (27, N'Seattle, WA, USA', 47.6062095, -122.3320708, CAST(N'2019-12-05T06:43:35.0666667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (28, N'Seattle, WA, USA', 47.6062095, -122.3320708, CAST(N'2019-12-05T06:43:36.4433333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (29, N'340 Diamond St, Arcadia, CA 91006, USA', 34.1354479, -118.02211499999999, CAST(N'2019-12-05T06:44:12.4100000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (30, N'340 Diamond St, Arcadia, CA 91006, USA', 34.1354479, -118.02211499999999, CAST(N'2019-12-05T06:44:20.3200000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (31, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:44:43.7400000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (32, N'Seattle, WA, USA', 47.6062095, -122.3320708, CAST(N'2019-12-05T06:46:15.8266667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (33, N'Seattle, WA, USA', 47.6062095, -122.3320708, CAST(N'2019-12-05T06:46:45.3966667' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (34, N'Seattle, WA, USA', 47.6062095, -122.3320708, CAST(N'2019-12-05T06:48:49.8200000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (35, N'New York, NY, USA', 40.7127753, -74.0059728, CAST(N'2019-12-05T06:49:03.7500000' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (36, N'Seal Beach, CA, USA', 33.7414085, -118.10476819999997, CAST(N'2019-12-05T06:52:50.0433333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (37, N'Washington D.C., DC, USA', 33.7414085, -118.10476819999997, CAST(N'2019-12-05T06:52:59.3733333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (38, N'Washington D.C., DC, USA', 38.9071923, -77.036870700000009, CAST(N'2019-12-05T06:53:01.6533333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (39, N'Washington D.C., DC, USA', 38.9071923, -77.036870700000009, CAST(N'2019-12-05T06:55:13.1333333' AS DateTime2))
INSERT [dbo].[Addresses2] ([Id], [Address], [Lat], [Lng], [DateCreated]) VALUES (40, N'Newport Beach, CA, USA', 33.6188829, -117.9298493, CAST(N'2019-12-05T06:55:21.7366667' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Addresses2] OFF
ALTER TABLE [dbo].[Addresses2] ADD  CONSTRAINT [DF_Addresses2_DateCreated]  DEFAULT (getutcdate()) FOR [DateCreated]
GO
/****** Object:  StoredProcedure [dbo].[Addresses2_Insert]    Script Date: 12/5/2019 2:08:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[Addresses2_Insert]
					@id int out
					,@Address nvarchar(500) = null
					,@Latitude float = null
					,@Longitude float = null
					
AS 

/*
		DECLARE @_id int 
		DECLARE @_address nvarchar(500) = 'New York, NY, USA'
				,@_latitude float = 12.132
				,@_longitude float = 123.12312

		EXECUTE dbo.Addresses2_Insert
							@_id
							,@_address
							,@_latitude
							,@_longitude

		SELECT *
		FROM dbo.Addresses2;
*/

BEGIN

	INSERT INTO [dbo].[Addresses2]
			   ([Address]
			   ,[Lat]
			   ,[Lng])
			
		 VALUES
			   (@Address
			   ,@Latitude
			   ,@Longitude)
					
		    SET @Id = SCOPE_IDENTITY();
END
GO
