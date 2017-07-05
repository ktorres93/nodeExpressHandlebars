CREATE DATABASE `ethereum`;
USE DATABASE `ethereum`;
CREATE TABLE `blocksize` (
  `timestamp` int(11) DEFAULT NULL,
  `blocksize` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1
CREATE TABLE `etherprice` (
  `timestamp` int(11) DEFAULT NULL,
  `price_USD` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1