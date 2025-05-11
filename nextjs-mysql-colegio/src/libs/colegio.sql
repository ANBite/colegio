CREATE DATABASE  IF NOT EXISTS `colegio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `colegio`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: colegio
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asignacion_curso`
--

DROP TABLE IF EXISTS `asignacion_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignacion_curso` (
  `id_asignacion_curso` int NOT NULL,
  `id_curso` int DEFAULT NULL,
  `id_seccion` int DEFAULT NULL,
  `id_docente` int DEFAULT NULL,
  `ciclo_escolar_id` int DEFAULT NULL,
  PRIMARY KEY (`id_asignacion_curso`),
  KEY `id_curso` (`id_curso`),
  KEY `id_seccion` (`id_seccion`),
  KEY `id_docente` (`id_docente`),
  KEY `ciclo_escolar_id` (`ciclo_escolar_id`),
  CONSTRAINT `asignacion_curso_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`),
  CONSTRAINT `asignacion_curso_ibfk_2` FOREIGN KEY (`id_seccion`) REFERENCES `seccion` (`seccion_id`),
  CONSTRAINT `asignacion_curso_ibfk_3` FOREIGN KEY (`id_docente`) REFERENCES `empleado` (`empleado_id`),
  CONSTRAINT `asignacion_curso_ibfk_4` FOREIGN KEY (`ciclo_escolar_id`) REFERENCES `ciclo_escolar` (`ciclo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignacion_curso`
--

LOCK TABLES `asignacion_curso` WRITE;
/*!40000 ALTER TABLE `asignacion_curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `asignacion_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asistencia` (
  `asistencia_id` int NOT NULL,
  `estudiante_id` int DEFAULT NULL,
  `curso_id` int DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `observaciones` text,
  `profesor_id` int DEFAULT NULL,
  `hora_registro` time DEFAULT NULL,
  `justificacion` text,
  `documento_justificacion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`asistencia_id`),
  KEY `estudiante_id` (`estudiante_id`),
  KEY `curso_id` (`curso_id`),
  KEY `profesor_id` (`profesor_id`),
  CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiante` (`estudiante_id`),
  CONSTRAINT `asistencia_ibfk_2` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id_curso`),
  CONSTRAINT `asistencia_ibfk_3` FOREIGN KEY (`profesor_id`) REFERENCES `empleado` (`empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asistencia`
--

LOCK TABLES `asistencia` WRITE;
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asistencia_empleado`
--

DROP TABLE IF EXISTS `asistencia_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asistencia_empleado` (
  `asistencia_empleado_id` int NOT NULL,
  `empleado_id` int DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `observaciones` text,
  `hora_registro` time DEFAULT NULL,
  `justificacion` text,
  `documento_justificacion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`asistencia_empleado_id`),
  KEY `empleado_id` (`empleado_id`),
  CONSTRAINT `asistencia_empleado_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleado` (`empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asistencia_empleado`
--

LOCK TABLES `asistencia_empleado` WRITE;
/*!40000 ALTER TABLE `asistencia_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aula`
--

DROP TABLE IF EXISTS `aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aula` (
  `aula_id` int NOT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  `piso` int DEFAULT NULL,
  `capacidad_maxima` int DEFAULT NULL,
  `tipo_de_aula` varchar(50) DEFAULT NULL,
  `recursos_disponibles` text,
  `estado` varchar(20) DEFAULT NULL,
  `horario_disponibilidad` text,
  `fecha_ultimo_mantenimiento` date DEFAULT NULL,
  `observaciones` text,
  PRIMARY KEY (`aula_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aula`
--

LOCK TABLES `aula` WRITE;
/*!40000 ALTER TABLE `aula` DISABLE KEYS */;
/*!40000 ALTER TABLE `aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beca`
--

DROP TABLE IF EXISTS `beca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beca` (
  `beca_id` int NOT NULL,
  `nombre_beca` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `requisitos` text,
  `porcentaje` decimal(5,2) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `convenio` text,
  `presupuesto` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`beca_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beca`
--

LOCK TABLES `beca` WRITE;
/*!40000 ALTER TABLE `beca` DISABLE KEYS */;
/*!40000 ALTER TABLE `beca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calificacion` (
  `calificacion_id` int NOT NULL,
  `estudiante_id` int DEFAULT NULL,
  `seccion_id` int DEFAULT NULL,
  `bimestre` int DEFAULT NULL,
  `tipo_evaluacion` varchar(100) DEFAULT NULL,
  `puntaje` decimal(5,2) DEFAULT NULL,
  `ponderacion` decimal(5,2) DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `profesor_id` int DEFAULT NULL,
  `retroalimentacion` text,
  `observaciones` text,
  `fecha_actualizado` date DEFAULT NULL,
  PRIMARY KEY (`calificacion_id`),
  KEY `estudiante_id` (`estudiante_id`),
  KEY `seccion_id` (`seccion_id`),
  KEY `profesor_id` (`profesor_id`),
  CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiante` (`estudiante_id`),
  CONSTRAINT `calificacion_ibfk_2` FOREIGN KEY (`seccion_id`) REFERENCES `seccion` (`seccion_id`),
  CONSTRAINT `calificacion_ibfk_3` FOREIGN KEY (`profesor_id`) REFERENCES `empleado` (`empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificacion`
--

LOCK TABLES `calificacion` WRITE;
/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciclo_escolar`
--

DROP TABLE IF EXISTS `ciclo_escolar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciclo_escolar` (
  `ciclo_id` int NOT NULL,
  `año` int DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `fecha_cierre_calificaciones` date DEFAULT NULL,
  `fecha_cierre_de_actas` date DEFAULT NULL,
  `director` varchar(100) DEFAULT NULL,
  `cordinador_academico` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ciclo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclo_escolar`
--

LOCK TABLES `ciclo_escolar` WRITE;
/*!40000 ALTER TABLE `ciclo_escolar` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciclo_escolar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacto_de_emergencia_empleado`
--

DROP TABLE IF EXISTS `contacto_de_emergencia_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto_de_emergencia_empleado` (
  `contacto_de_emergencia_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `parentesco` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`contacto_de_emergencia_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto_de_emergencia_empleado`
--

LOCK TABLES `contacto_de_emergencia_empleado` WRITE;
/*!40000 ALTER TABLE `contacto_de_emergencia_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacto_de_emergencia_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacto_de_emergencia_estudiante`
--

DROP TABLE IF EXISTS `contacto_de_emergencia_estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto_de_emergencia_estudiante` (
  `contacto_de_emergencia_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `parentesco` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`contacto_de_emergencia_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto_de_emergencia_estudiante`
--

LOCK TABLES `contacto_de_emergencia_estudiante` WRITE;
/*!40000 ALTER TABLE `contacto_de_emergencia_estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacto_de_emergencia_estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrato_empleado`
--

DROP TABLE IF EXISTS `contrato_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contrato_empleado` (
  `contrato_id` int NOT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_contrato` varchar(50) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `salario_mensual` decimal(10,2) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`contrato_id`),
  KEY `empleado_id` (`empleado_id`),
  CONSTRAINT `contrato_empleado_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleado` (`empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrato_empleado`
--

LOCK TABLES `contrato_empleado` WRITE;
/*!40000 ALTER TABLE `contrato_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `contrato_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `id_curso` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `horas_asignadas` int DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `departamento_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  PRIMARY KEY (`departamento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentacion_empleado`
--

DROP TABLE IF EXISTS `documentacion_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentacion_empleado` (
  `documentacion_empleado_id` int NOT NULL,
  `tipo_de_documento_id` int DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `fecha_de_subida` date DEFAULT NULL,
  `observaciones` text,
  `ruta_de_archivo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`documentacion_empleado_id`),
  KEY `tipo_de_documento_id` (`tipo_de_documento_id`),
  CONSTRAINT `documentacion_empleado_ibfk_1` FOREIGN KEY (`tipo_de_documento_id`) REFERENCES `tipo_de_documento_empleado` (`tipo_de_documento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentacion_empleado`
--

LOCK TABLES `documentacion_empleado` WRITE;
/*!40000 ALTER TABLE `documentacion_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentacion_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentacion_estudiante`
--

DROP TABLE IF EXISTS `documentacion_estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentacion_estudiante` (
  `documentacion_estudiante_id` int NOT NULL,
  `tipo_de_documento_id` int DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `fecha_de_subida` date DEFAULT NULL,
  `observaciones` text,
  `ruta_de_archivo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`documentacion_estudiante_id`),
  KEY `tipo_de_documento_id` (`tipo_de_documento_id`),
  CONSTRAINT `documentacion_estudiante_ibfk_1` FOREIGN KEY (`tipo_de_documento_id`) REFERENCES `tipo_de_documento_estudiante` (`tipo_de_documento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentacion_estudiante`
--

LOCK TABLES `documentacion_estudiante` WRITE;
/*!40000 ALTER TABLE `documentacion_estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentacion_estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `empleado_id` int NOT NULL,
  `cod_empleado` varchar(50) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `CUI` varchar(20) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `genero` varchar(10) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `estado_civil` varchar(20) DEFAULT NULL,
  `fecha_contratacion` date DEFAULT NULL,
  `fecha_egreso` date DEFAULT NULL,
  `motivo_de_egreso` text,
  `contacto_de_emergencia_id` int DEFAULT NULL,
  `tipo_sangre` varchar(5) DEFAULT NULL,
  `puesto_id` int DEFAULT NULL,
  `tipo_de_empleado_id` int DEFAULT NULL,
  `especialidad` varchar(100) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `no_colegiado` varchar(50) DEFAULT NULL,
  `nivel_educativo` varchar(50) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `documentacion_empleado_id` int DEFAULT NULL,
  PRIMARY KEY (`empleado_id`),
  KEY `contacto_de_emergencia_id` (`contacto_de_emergencia_id`),
  KEY `puesto_id` (`puesto_id`),
  KEY `tipo_de_empleado_id` (`tipo_de_empleado_id`),
  KEY `documentacion_empleado_id` (`documentacion_empleado_id`),
  CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`contacto_de_emergencia_id`) REFERENCES `contacto_de_emergencia_empleado` (`contacto_de_emergencia_id`),
  CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`puesto_id`) REFERENCES `puesto` (`puesto_id`),
  CONSTRAINT `empleado_ibfk_3` FOREIGN KEY (`tipo_de_empleado_id`) REFERENCES `tipo_de_empleado` (`tipo_de_empleado_id`),
  CONSTRAINT `empleado_ibfk_4` FOREIGN KEY (`documentacion_empleado_id`) REFERENCES `documentacion_empleado` (`documentacion_empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `estudiante_id` int NOT NULL,
  `cod_personal` varchar(50) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `CUI` varchar(20) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `constancia` text,
  `genero` varchar(10) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_egreso` date DEFAULT NULL,
  `motivo_de_egreso` text,
  `documentacion_estudiante_id` int DEFAULT NULL,
  `contacto_de_emergencia_id` int DEFAULT NULL,
  `tipo_sangre` varchar(5) DEFAULT NULL,
  `religion` varchar(50) DEFAULT NULL,
  `etnia` varchar(50) DEFAULT NULL,
  `idioma_materno` varchar(50) DEFAULT NULL,
  `necesita_apoyo_educativo` tinyint(1) DEFAULT NULL,
  `beca_id` int DEFAULT NULL,
  PRIMARY KEY (`estudiante_id`),
  KEY `documentacion_estudiante_id` (`documentacion_estudiante_id`),
  KEY `contacto_de_emergencia_id` (`contacto_de_emergencia_id`),
  KEY `beca_id` (`beca_id`),
  CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`documentacion_estudiante_id`) REFERENCES `documentacion_estudiante` (`documentacion_estudiante_id`),
  CONSTRAINT `estudiante_ibfk_2` FOREIGN KEY (`contacto_de_emergencia_id`) REFERENCES `contacto_de_emergencia_estudiante` (`contacto_de_emergencia_id`),
  CONSTRAINT `estudiante_ibfk_3` FOREIGN KEY (`beca_id`) REFERENCES `beca` (`beca_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado`
--

DROP TABLE IF EXISTS `grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grado` (
  `id_grado` int NOT NULL,
  `nombre_grado` varchar(100) DEFAULT NULL,
  `prerequisito_grado_id` int DEFAULT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_grado`),
  KEY `prerequisito_grado_id` (`prerequisito_grado_id`),
  CONSTRAINT `grado_ibfk_1` FOREIGN KEY (`prerequisito_grado_id`) REFERENCES `prerrequisito_grado` (`id_prerrequisito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado`
--

LOCK TABLES `grado` WRITE;
/*!40000 ALTER TABLE `grado` DISABLE KEYS */;
/*!40000 ALTER TABLE `grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial_academico`
--

DROP TABLE IF EXISTS `historial_academico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historial_academico` (
  `historial_academico_id` int NOT NULL,
  `fecha_de_registro` date DEFAULT NULL,
  `estudiante_id` int DEFAULT NULL,
  `grado_id` int DEFAULT NULL,
  `ciclo_escolar_id` int DEFAULT NULL,
  `seccion_id` int DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `cursado_cursando` varchar(20) DEFAULT NULL,
  `promedio_final` decimal(5,2) DEFAULT NULL,
  `observaciones` text,
  `promovido` tinyint DEFAULT NULL,
  `recomendacion` text,
  PRIMARY KEY (`historial_academico_id`),
  KEY `estudiante_id` (`estudiante_id`),
  KEY `grado_id` (`grado_id`),
  KEY `ciclo_escolar_id` (`ciclo_escolar_id`),
  KEY `seccion_id` (`seccion_id`),
  CONSTRAINT `historial_academico_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiante` (`estudiante_id`),
  CONSTRAINT `historial_academico_ibfk_2` FOREIGN KEY (`grado_id`) REFERENCES `grado` (`id_grado`),
  CONSTRAINT `historial_academico_ibfk_3` FOREIGN KEY (`ciclo_escolar_id`) REFERENCES `ciclo_escolar` (`ciclo_id`),
  CONSTRAINT `historial_academico_ibfk_4` FOREIGN KEY (`seccion_id`) REFERENCES `seccion` (`seccion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial_academico`
--

LOCK TABLES `historial_academico` WRITE;
/*!40000 ALTER TABLE `historial_academico` DISABLE KEYS */;
/*!40000 ALTER TABLE `historial_academico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial_empleado`
--

DROP TABLE IF EXISTS `historial_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historial_empleado` (
  `historial_empleado_id` int NOT NULL,
  `empleado_id` int DEFAULT NULL,
  `fecha_de_registro` date DEFAULT NULL,
  `accion_realizada` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `usuario_registro` varchar(100) DEFAULT NULL,
  `observaciones` text,
  PRIMARY KEY (`historial_empleado_id`),
  KEY `empleado_id` (`empleado_id`),
  CONSTRAINT `historial_empleado_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleado` (`empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial_empleado`
--

LOCK TABLES `historial_empleado` WRITE;
/*!40000 ALTER TABLE `historial_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `historial_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscripcion_estudiantes`
--

DROP TABLE IF EXISTS `inscripcion_estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscripcion_estudiantes` (
  `id_inscripcion_estudiante` int NOT NULL,
  `estudiante_id` int DEFAULT NULL,
  `id_seccion` int DEFAULT NULL,
  `fecha_de_inscripcion` date DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `pago_de_inscripcion` decimal(10,2) DEFAULT NULL,
  `observaciones` text,
  PRIMARY KEY (`id_inscripcion_estudiante`),
  KEY `estudiante_id` (`estudiante_id`),
  KEY `id_seccion` (`id_seccion`),
  CONSTRAINT `inscripcion_estudiantes_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiante` (`estudiante_id`),
  CONSTRAINT `inscripcion_estudiantes_ibfk_2` FOREIGN KEY (`id_seccion`) REFERENCES `seccion` (`seccion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscripcion_estudiantes`
--

LOCK TABLES `inscripcion_estudiantes` WRITE;
/*!40000 ALTER TABLE `inscripcion_estudiantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `inscripcion_estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pago_matricula`
--

DROP TABLE IF EXISTS `pago_matricula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pago_matricula` (
  `pago_id` int NOT NULL,
  `estudiante_id` int DEFAULT NULL,
  `concepto` varchar(100) DEFAULT NULL,
  `fecha_de_pago` date DEFAULT NULL,
  `monto` decimal(10,2) DEFAULT NULL,
  `metodo_de_pago` varchar(50) DEFAULT NULL,
  `ciclo_escolar` int DEFAULT NULL,
  `descuento_aplicado` decimal(5,2) DEFAULT NULL,
  `mora_aplicada` decimal(5,2) DEFAULT NULL,
  `factura` varchar(100) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pago_id`),
  KEY `estudiante_id` (`estudiante_id`),
  CONSTRAINT `pago_matricula_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiante` (`estudiante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pago_matricula`
--

LOCK TABLES `pago_matricula` WRITE;
/*!40000 ALTER TABLE `pago_matricula` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago_matricula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prerrequisito_grado`
--

DROP TABLE IF EXISTS `prerrequisito_grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prerrequisito_grado` (
  `id_prerrequisito` int NOT NULL,
  `grado` varchar(50) DEFAULT NULL,
  `edad_minima_estudiante` int DEFAULT NULL,
  PRIMARY KEY (`id_prerrequisito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prerrequisito_grado`
--

LOCK TABLES `prerrequisito_grado` WRITE;
/*!40000 ALTER TABLE `prerrequisito_grado` DISABLE KEYS */;
/*!40000 ALTER TABLE `prerrequisito_grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puesto`
--

DROP TABLE IF EXISTS `puesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puesto` (
  `puesto_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `departamento_id` int DEFAULT NULL,
  PRIMARY KEY (`puesto_id`),
  KEY `departamento_id` (`departamento_id`),
  CONSTRAINT `puesto_ibfk_1` FOREIGN KEY (`departamento_id`) REFERENCES `departamento` (`departamento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puesto`
--

LOCK TABLES `puesto` WRITE;
/*!40000 ALTER TABLE `puesto` DISABLE KEYS */;
/*!40000 ALTER TABLE `puesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seccion`
--

DROP TABLE IF EXISTS `seccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seccion` (
  `seccion_id` int NOT NULL,
  `grado_id` int DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `aula_asignada_id` int DEFAULT NULL,
  `capacidad_max` int DEFAULT NULL,
  `profesor_encargado_id` int DEFAULT NULL,
  `ciclo_escolar_id` int DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `horario_entrada` time DEFAULT NULL,
  `horario_salida` time DEFAULT NULL,
  PRIMARY KEY (`seccion_id`),
  KEY `grado_id` (`grado_id`),
  KEY `aula_asignada_id` (`aula_asignada_id`),
  KEY `profesor_encargado_id` (`profesor_encargado_id`),
  KEY `ciclo_escolar_id` (`ciclo_escolar_id`),
  CONSTRAINT `seccion_ibfk_1` FOREIGN KEY (`grado_id`) REFERENCES `grado` (`id_grado`),
  CONSTRAINT `seccion_ibfk_2` FOREIGN KEY (`aula_asignada_id`) REFERENCES `aula` (`aula_id`),
  CONSTRAINT `seccion_ibfk_3` FOREIGN KEY (`profesor_encargado_id`) REFERENCES `empleado` (`empleado_id`),
  CONSTRAINT `seccion_ibfk_4` FOREIGN KEY (`ciclo_escolar_id`) REFERENCES `ciclo_escolar` (`ciclo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seccion`
--

LOCK TABLES `seccion` WRITE;
/*!40000 ALTER TABLE `seccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `seccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_de_documento_empleado`
--

DROP TABLE IF EXISTS `tipo_de_documento_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_de_documento_empleado` (
  `tipo_de_documento_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `obligatorio` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_de_documento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_de_documento_empleado`
--

LOCK TABLES `tipo_de_documento_empleado` WRITE;
/*!40000 ALTER TABLE `tipo_de_documento_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_de_documento_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_de_documento_estudiante`
--

DROP TABLE IF EXISTS `tipo_de_documento_estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_de_documento_estudiante` (
  `tipo_de_documento_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `obligatorio` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_de_documento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_de_documento_estudiante`
--

LOCK TABLES `tipo_de_documento_estudiante` WRITE;
/*!40000 ALTER TABLE `tipo_de_documento_estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_de_documento_estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_de_empleado`
--

DROP TABLE IF EXISTS `tipo_de_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_de_empleado` (
  `tipo_de_empleado_id` int NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tipo_de_empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_de_empleado`
--

LOCK TABLES `tipo_de_empleado` WRITE;
/*!40000 ALTER TABLE `tipo_de_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_de_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuario_id` int NOT NULL,
  `empleado_id` int DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  KEY `empleado_id` (`empleado_id`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleado` (`empleado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-11 17:05:30
