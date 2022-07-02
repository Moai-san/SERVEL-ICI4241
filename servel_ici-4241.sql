-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2022 a las 12:07:09
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `servel ici-4241`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preferencias`
--

CREATE TABLE `preferencias` (
  `id` int(11) NOT NULL,
  `nombreP` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `conteo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `preferencias`
--

INSERT INTO `preferencias` (`id`, `nombreP`, `conteo`) VALUES
(1, 'Apruebo', 0),
(2, 'Rechazo', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votantes`
--

CREATE TABLE `votantes` (
  `name` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `rut` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `bDate` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `enabled` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `votantes`
--

INSERT INTO `votantes` (`name`, `surname`, `rut`, `password`, `bDate`, `enabled`) VALUES
('Felipe', 'Santis', '182046442', 'tftlol247', '2001/02/13', '1'),
('Nicolas', 'Lagos', '204813457', 'goodbyeworld1', '2001/01/03', '1'),
('Leonardo', 'Gonzalez', '205518428', 'helloworld1234', '2001/01/14', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `preferencias`
--
ALTER TABLE `preferencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `votantes`
--
ALTER TABLE `votantes`
  ADD PRIMARY KEY (`rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preferencias`
--
ALTER TABLE `preferencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
