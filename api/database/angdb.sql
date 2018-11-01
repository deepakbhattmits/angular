-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2017 at 03:02 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `carttable`
--

CREATE TABLE `carttable` (
  `id` int(11) NOT NULL,
  `Pid` int(20) NOT NULL,
  `ProductName` varchar(20) NOT NULL,
  `ProductPrice` varchar(20) NOT NULL,
  `ProductQuantity` varchar(20) NOT NULL,
  `UpdatedPrice` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carttable`
--

INSERT INTO `carttable` (`id`, `Pid`, `ProductName`, `ProductPrice`, `ProductQuantity`, `UpdatedPrice`) VALUES
(1, 1, 'almond nut', '400', '3', 1200),
(2, 2, 'dats', '180', '2', 360),
(3, 4, 'Cantaloupe Seeds', '250', '6', 1500),
(4, 1, 'almond nut', '400', '17', 6800),
(5, 2, 'dats', '180', '15', 2700),
(6, 2, 'dats', '180', '1', 180),
(7, 3, 'betel-nut', '200', '1', 200);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Enquiry` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `Name`, `Email`, `Enquiry`) VALUES
(13, 'fdes', 'sdfsdf@qwe.cxpom', 'asdasdasd'),
(14, 'sad', 'qwe@qwe.com', 'dsfsdf'),
(15, 'dsf', 'sdf@swdf.vom', 'sdf');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `product-name` varchar(20) NOT NULL,
  `product-price` varchar(20) NOT NULL,
  `product-description` varchar(20) NOT NULL,
  `stock` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product-name`, `product-price`, `product-description`, `stock`) VALUES
(1, 'almond nut', '400', 'fresh', 0),
(2, 'dats', '180', 'fresh', 2),
(3, 'betel-nut', '200', 'fresh', 19),
(4, 'Cantaloupe Seeds', '250', 'fresh', 14),
(5, 'Cashew nut', '300', 'fresh', 20),
(6, 'Chestnut', '400', 'fresh', 20),
(7, 'Coconut', '500', 'fresh', 20),
(8, 'Dates Dried', '550', 'fresh', 20),
(9, 'Groundnuts', '600', 'fresh', 20),
(10, 'Pistachio Nut', '700 ', 'fresh', 20),
(11, 'Pumpkin Seeds', '750', 'fresh', 20);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(20) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `HomeTown` varchar(20) NOT NULL,
  `Job` varchar(20) NOT NULL,
  `Age` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `FirstName`, `LastName`, `HomeTown`, `Job`, `Age`) VALUES
(2, 'akhilesh', 'singh', 'uttar pradesh', 'ase', '25'),
(3, 'devesh', 'kumar', 'uttar pradesh', 'ase', '25'),
(22, 'kapil', 'sharma', 'up', 'ase', '25'),
(23, 'rajeev', 'patiyal', 'himachal', 'army', '25'),
(24, 'om prakash', 'bhatt', 'uttrakhand', 'defense', '22'),
(25, 'binit', 'singh', 'jharkhand', 'ase', '23'),
(26, 'rahul', 'rajpoot', 'gwalior', 'ase', '26'),
(27, 'kuldeep', 'singh', 'gwalior', 'ase', '25'),
(28, 'NAgari', 'YS', 'Ballari', 'DEVELOPER', '26'),
(29, 'Mohammad', 'Peer', 'Bangalore', 'Web Developer', '23'),
(30, 'deepak', 'bhatt', 'UK', 'ASE', '26'),
(31, 'dhirendra', 'kumar', 'bihar', 'ase', '28'),
(32, 'ashwin', 'shahi', 'up', 'ase', '25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carttable`
--
ALTER TABLE `carttable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carttable`
--
ALTER TABLE `carttable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
