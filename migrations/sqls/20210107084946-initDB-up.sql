CREATE TABLE IF NOT EXISTS `test_crud`.`playlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;
-- -----------------------------------------------------
-- Table `mydb`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_crud`.`song` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `artist` VARCHAR(45) NOT NULL,
  `playlist_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tracks_playlist_idx` (`playlist_id` ASC) VISIBLE,
  CONSTRAINT `fk_tracks_playlist` FOREIGN KEY (`playlist_id`) REFERENCES `test_crud`.`playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;