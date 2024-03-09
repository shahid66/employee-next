-- CreateTable
CREATE TABLE `Employee` (
    `EmployeeID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `DateOfBirth` DATETIME(3) NULL,
    `Gender` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NOT NULL,
    `PhoneNumber` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `DepartmentID` INTEGER NOT NULL,
    `BranchID` INTEGER NOT NULL,
    `PositionID` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`EmployeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch` (
    `BranchID` INTEGER NOT NULL AUTO_INCREMENT,
    `BranchName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`BranchID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `DepartmentID` INTEGER NOT NULL AUTO_INCREMENT,
    `DepartmentName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`DepartmentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Position` (
    `PositionID` INTEGER NOT NULL AUTO_INCREMENT,
    `PositionName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`PositionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `AttendanceID` INTEGER NOT NULL AUTO_INCREMENT,
    `EmployeeID` INTEGER NOT NULL,
    `AttendanceDate` DATETIME(3) NOT NULL,
    `ClockInTime` DATETIME(3) NOT NULL,
    `ClockOutTime` DATETIME(3) NULL,
    `AttendanceStatus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`AttendanceID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leave` (
    `LeaveID` INTEGER NOT NULL AUTO_INCREMENT,
    `EmployeeID` INTEGER NOT NULL,
    `LeaveDate` DATETIME(3) NOT NULL,
    `LeaveType` VARCHAR(191) NOT NULL,
    `LeaveStatus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`LeaveID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Holiday` (
    `HolidayID` INTEGER NOT NULL AUTO_INCREMENT,
    `HolidayDate` DATETIME(3) NOT NULL,
    `HolidayName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`HolidayID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_DepartmentID_fkey` FOREIGN KEY (`DepartmentID`) REFERENCES `Department`(`DepartmentID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_BranchID_fkey` FOREIGN KEY (`BranchID`) REFERENCES `Branch`(`BranchID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_PositionID_fkey` FOREIGN KEY (`PositionID`) REFERENCES `Position`(`PositionID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Leave` ADD CONSTRAINT `Leave_EmployeeID_fkey` FOREIGN KEY (`EmployeeID`) REFERENCES `Employee`(`EmployeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;
