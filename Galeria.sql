CREATE DATABASE GaleriaOnlineDB
GO

USE GaleriaOnlineDB
GO

CREATE TABLE Imagem(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Nome NVARCHAR(255) NOT NULL,
	Caminho NVARCHAR(500) NOT NULL
);
GO   

--EXEC sp_rename 'Imagen', 'Imagem';