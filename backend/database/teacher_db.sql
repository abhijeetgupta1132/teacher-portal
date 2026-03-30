-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table teacher_db.auth_user: ~3 rows (approximately)
INSERT INTO `auth_user` (`id`, `email`, `first_name`, `last_name`, `password`, `is_active`, `created_at`, `updated_at`) VALUES
	(1, 'abhijitgupta380@gmail.com', 'Abhijeet', 'Gupta', '$2y$10$IsIO1SFLxXueRPXnso.RwugLKkDR0jllYaTxQQ/LTxfeR.GOeibxO', 1, '2026-03-30 00:55:57', '2026-03-30 00:55:57'),
	(2, 'kumarroshan09628@gmail.com', 'roshan', 'Gupta', '$2y$10$pE1Zejni6YgY75kbELKa2.BIUvFMBhV8vbGfgtsYZg9SFw6eK6uM6', 1, '2026-03-30 00:56:40', '2026-03-30 00:56:40'),
	(4, 'teacher1@gmail.com', 'teacher1', '1', '$2y$10$/5YhQxhXdGZHSe1iY0opEu4MR5Ae1kX6jSzL1ANAdgOqrAY9O8Y1y', 1, '2026-03-30 01:05:02', '2026-03-30 01:05:02');

-- Dumping data for table teacher_db.teachers: ~1 rows (approximately)
INSERT INTO `teachers` (`id`, `user_id`, `university_name`, `gender`, `year_joined`, `subject`, `phone`, `created_at`) VALUES
	(2, 4, 'mu', 'male', '2026', 'cse', '8887777779', '2026-03-30 06:35:02');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
