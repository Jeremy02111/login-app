-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-07-2025 a las 15:02:36
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

DROP TABLE IF EXISTS `trabajador`;
CREATE TABLE IF NOT EXISTS `trabajador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `id_jefe` int DEFAULT NULL,
  `estado_trabajador` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `FK_6b61ab8c246afa638c87d15a23c` (`id_jefe`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`id`, `nombre`, `cargo`, `id_jefe`, `estado_trabajador`) VALUES
(1, 'Ana Perez', 'CEO', NULL, 1),
(2, 'Luis Gómez', 'Gerente de TI', 1, 1),
(3, 'Carla Ruiz', 'Lider Backend', 2, 1),
(4, 'David Soto', 'Backend Dev', 3, 1),
(5, 'Elena Rios', 'Lider QA', 2, 1),
(6, 'Mario León', 'Qa Tester', 5, 1),
(7, 'Luis Torres', 'Lider Frontend', 2, 1),
(8, 'Norma Ramirez', 'Frontend Dev', 7, 1),
(9, 'Carlos Gutierrez', 'Backend Junior', 4, 1),
(10, 'Santiago Piñan', 'Pasante Backend', 9, 0),
(11, 'Julian Avila', 'Diseñador', 7, 1),
(12, 'Pedro Hermosa', 'UX/UI', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `full_name`, `role`) VALUES
(3, 'JpLeo', '$2b$10$YUu2OO2bF5RyQY.cDJ7Mx.7EB/7qlJf0EHH1tP8Htz.2Xp5qY6RbG', 'JeanPierre', 'user'),
(4, 'admin', '$2b$10$uXEn2iqkWPA5PJdZgN5efekG51oZ0see.42bP8vLJx6Ez7xkUj62K', 'Administrador del sistema', 'admin'),
(5, 'jpcamposz', '$2b$10$jawez7Fcof8V8tBg.kvvcelcycg3HRQc16iLO9SxYSAfK/9Sy/RuG', 'Jeremy', 'user'),
(6, 'mtUsu', '$2b$10$u.QDlv14LkczShU470sRH.Z2D5RUT2.lIYTLmUswSjqR0TyUKBJo2', 'Mateo', 'user'),
(7, 'jpSe', '$2b$10$zK1BxYsb0tv59gjBw9BFNOEHq/6I6NoXLRVvc8IKCoVpGPb1a5JTy', 'Juan', 'user'),
(8, 'jguerra@pucesi.edu.ec', '$2b$10$UC9BhbX74pt.LshW6.DFgOXCxk4E8ZQn6pyPbuQc1OOUi6oiKuGz2', 'juan Guerra', 'user'),
(9, 'drguandinango', '$2b$10$6QYeU3/cZsM3qBwDbR54qOnTd2kt9D2DC0VJ0eGntts4Nikd1gKji', 'drguandinango', 'admin'),
(10, 'erenesto@pucesi.edu.ec', '$2b$10$FVBM0ZA30gGXz8hJ1xSNfOitdRy8zIaWuk9Zz9mb0CvVPB3hAHeP.', 'erenesto saran', 'user'),
(11, 'sayuri', '$2b$10$hejfpPfvcDgh9bjrS4WYlus18WRaKOR890k4fSUGRsGN61UopUrDW', 'sayuri burga', 'user'),
(12, 'anahi ', '$2b$10$/oqJuN/GVFPCzQBOSoQtiezHwTbkMoB39DoetW/57eiT3cKNVRJRG', 'anahi mld', 'user'),
(13, 'jose', '$2b$10$ariy3c55CHODU.rBc2FODOCX3yCdjNuXZs19U/iukElWFRj8guX/G', 'jose luis', 'admin'),
(14, 'rober', '$2b$10$CGWF1gbUSTx73CvNk92IweUodDRm2Qie2TjNiLCqdxn40dEguu9t6', 'rober guno', 'user'),
(15, 'davicho123', '$2b$10$k/OuMjU6CnWyCHCBUUCOCe.hRbTiaoyaxsiuxfYvZD3olKcFzjFFe', 'davicho', 'user');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD CONSTRAINT `FK_6b61ab8c246afa638c87d15a23c` FOREIGN KEY (`id_jefe`) REFERENCES `trabajador` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
