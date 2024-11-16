CREATE DATABASE Flowly;
GO

USE Flowly;
GO

CREATE TABLE Roles (
    Rol_Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL,
    Descripcion NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE Usuarios (
    Usuario_Id INT PRIMARY KEY IDENTITY(1,1),
    Codigo NVARCHAR(20) UNIQUE,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido_1 NVARCHAR(100) NOT NULL,
    Apellido_2 NVARCHAR(100) NOT NULL,
    Username NVARCHAR(100) NOT NULL UNIQUE,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    Foto_Perfil NVARCHAR(MAX) NULL,
    Fecha_Registro DATETIME DEFAULT GETDATE(),
    Rol_Id INT FOREIGN KEY REFERENCES Roles(Rol_Id) ON DELETE SET NULL
);
GO

CREATE TABLE Publicaciones (
    Post_Id INT PRIMARY KEY IDENTITY(1,1),
    Codigo NVARCHAR(20) UNIQUE,
    Usuario_Id INT FOREIGN KEY REFERENCES Usuarios(Usuario_Id) ON DELETE CASCADE,
    Titulo NVARCHAR(255) NOT NULL,
    Contenido NVARCHAR(MAX) NOT NULL,
    Fecha_Publicacion DATETIME DEFAULT GETDATE(),
    Tipo_Contenido NVARCHAR(100) NOT NULL
);
GO

CREATE TABLE Multimedia (
    Multimedia_Id INT PRIMARY KEY IDENTITY(1,1),
    Codigo NVARCHAR(20) UNIQUE,
    Tipo_Contenido NVARCHAR(100) NOT NULL,
    Url_Archivo NVARCHAR(MAX) NOT NULL,
    Tipo_Archivo NVARCHAR(50) NOT NULL
);
GO

CREATE TABLE Publicacion_Multimedia (
    Post_Id INT FOREIGN KEY REFERENCES Publicaciones(Post_Id) ON DELETE CASCADE,
    Multimedia_Id INT FOREIGN KEY REFERENCES Multimedia(Multimedia_Id) ON DELETE CASCADE,
    Orden INT, 
    PRIMARY KEY (Post_Id, Multimedia_Id)
);
GO

CREATE TABLE Comentarios (
    Comentario_Id INT PRIMARY KEY IDENTITY(1,1),
    Post_Id INT FOREIGN KEY REFERENCES Publicaciones(Post_Id) ON DELETE CASCADE,
    Usuario_Id INT FOREIGN KEY REFERENCES Usuarios(Usuario_Id) ON DELETE NO ACTION,
    Contenido NVARCHAR(MAX) NOT NULL,
    Fecha_Comentario DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Reacciones (
    Reaccion_Id INT PRIMARY KEY IDENTITY(1,1),
    Post_Id INT FOREIGN KEY REFERENCES Publicaciones(Post_Id) ON DELETE CASCADE,
    Usuario_Id INT FOREIGN KEY REFERENCES Usuarios(Usuario_Id) ON DELETE NO ACTION,
    Tipo_Reaccion VARCHAR(50) NOT NULL,
    Fecha_Reaccion DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Seguidores (
    Seguidor_Id INT NOT NULL,
    Seguido_Id INT NOT NULL,
    Fecha_Inicio DATE DEFAULT GETDATE(),
    PRIMARY KEY (Seguidor_Id, Seguido_Id),
    FOREIGN KEY (Seguidor_Id) REFERENCES Usuarios(Usuario_Id),
    FOREIGN KEY (Seguido_Id) REFERENCES Usuarios(Usuario_Id)
);
GO

CREATE TABLE Transmisiones_En_Vivo (
    Transmision_Id INT PRIMARY KEY IDENTITY(1,1),
    Codigo NVARCHAR(20) UNIQUE,
    Usuario_Id INT NOT NULL,
    Titulo NVARCHAR(MAX) NOT NULL,
    Fecha_Inicio DATE DEFAULT GETDATE(),
    Estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (Usuario_Id) REFERENCES Usuarios(Usuario_Id) ON DELETE CASCADE
);
GO

CREATE TABLE Comentarios_En_Vivo (
    Comentario_Id INT PRIMARY KEY IDENTITY(1,1),
    Transmision_Id INT FOREIGN KEY REFERENCES Transmisiones_En_Vivo(Transmision_Id) ON DELETE CASCADE,
    Usuario_Id INT FOREIGN KEY REFERENCES Usuarios(Usuario_Id) ON DELETE NO ACTION,
    Contenido NVARCHAR(MAX) NOT NULL,
    Fecha_Comentario DATETIME DEFAULT GETDATE()
);
GO
