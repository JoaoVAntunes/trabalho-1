-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: xp3
-- ------------------------------------------------------
-- Server version	8.0.38

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `posicao` varchar(45) DEFAULT NULL,
  `meses_empresa` int DEFAULT NULL,
  `departamento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Carlos Silva',NULL,'21987654321',NULL,NULL,NULL,NULL,NULL),(3,'Maria Oliveira',NULL,'31987654321',NULL,NULL,NULL,NULL,NULL),(4,'João Pereira',NULL,'41987654321',NULL,NULL,NULL,NULL,NULL),(5,'Fernanda Costa',NULL,'51987654321',NULL,NULL,NULL,NULL,NULL),(6,'Lucas Santos',NULL,'61987654321',NULL,NULL,NULL,NULL,NULL),(7,'Juliana Alves',NULL,'71987654321',NULL,NULL,NULL,NULL,NULL),(8,'Ricardo Lima',NULL,'81987654321',NULL,NULL,NULL,NULL,NULL),(9,'Paula Martins',NULL,'91987654321',NULL,NULL,NULL,NULL,NULL),(12,'Maria Souza','maria.souza@email.com','21987654321','1988-07-10','23456789011','Analista de Dados',36,'Business Intelligence'),(13,'Pedro Oliveira','pedro.oliveira@email.com','31987654321','1995-01-22','34567890122','Designer UI/UX',12,'Design'),(14,'Ana Lima','ana.lima@email.com','41987654321','1992-10-30','45678901233','Product Owner',48,'Produto'),(15,'Lucas Martins','lucas.martins@email.com','51987654321','1998-03-18','56789012344','Estagiário',6,'RH'),(16,'Fernanda Costa','fernanda.costa@email.com','61987654321','1991-11-11','67890123455','Gerente de Projetos',60,'PMO'),(17,'Carlos Pereira','carlos.pereira@email.com','71987654321','1985-06-05','78901234566','Arquiteto de Software',72,'Engenharia'),(18,'Juliana Almeida','juliana.almeida@email.com','81987654321','1993-09-09','89012345677','Analista de Suporte',18,'Suporte Técnico');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25 17:55:53
