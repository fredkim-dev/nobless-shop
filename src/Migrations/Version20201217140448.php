<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201217140448 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE bitbag_bonus_points_strategy (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(64) NOT NULL, name VARCHAR(255) NOT NULL, calculator_type VARCHAR(255) NOT NULL, calculator_configuration LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', enabled TINYINT(1) NOT NULL, is_deduct_bonus_points TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_C13B02FD77153098 (code), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_bonus_points (id INT AUTO_INCREMENT NOT NULL, order_id INT NOT NULL, points INT NOT NULL, is_used TINYINT(1) NOT NULL, expires_at DATETIME DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_5CEF9F768D9F6D38 (order_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_bonus_points_strategy_rule (id INT AUTO_INCREMENT NOT NULL, bonus_points_strategy_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, configuration LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', INDEX IDX_FB8F6CCEB1CB0451 (bonus_points_strategy_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_customer_bonus_points (id INT AUTO_INCREMENT NOT NULL, customer_id INT NOT NULL, INDEX IDX_8AC5EF499395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_bonus_points_customer (bonus_points_customer_id INT NOT NULL, bonus_points_id INT NOT NULL, INDEX IDX_5444C919F7941E90 (bonus_points_customer_id), INDEX IDX_5444C919B96146F6 (bonus_points_id), PRIMARY KEY(bonus_points_customer_id, bonus_points_id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_bonus_points_used_customer (bonus_points_customer_id INT NOT NULL, bonus_points_id INT NOT NULL, INDEX IDX_8D41A6F9F7941E90 (bonus_points_customer_id), INDEX IDX_8D41A6F9B96146F6 (bonus_points_id), PRIMARY KEY(bonus_points_customer_id, bonus_points_id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bitbag_bonus_points ADD CONSTRAINT FK_5CEF9F768D9F6D38 FOREIGN KEY (order_id) REFERENCES sylius_order (id)');
        $this->addSql('ALTER TABLE bitbag_bonus_points_strategy_rule ADD CONSTRAINT FK_FB8F6CCEB1CB0451 FOREIGN KEY (bonus_points_strategy_id) REFERENCES bitbag_bonus_points_strategy (id)');
        $this->addSql('ALTER TABLE bitbag_customer_bonus_points ADD CONSTRAINT FK_8AC5EF499395C3F3 FOREIGN KEY (customer_id) REFERENCES sylius_customer (id)');
        $this->addSql('ALTER TABLE bitbag_bonus_points_customer ADD CONSTRAINT FK_5444C919F7941E90 FOREIGN KEY (bonus_points_customer_id) REFERENCES bitbag_customer_bonus_points (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bitbag_bonus_points_customer ADD CONSTRAINT FK_5444C919B96146F6 FOREIGN KEY (bonus_points_id) REFERENCES bitbag_bonus_points (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bitbag_bonus_points_used_customer ADD CONSTRAINT FK_8D41A6F9F7941E90 FOREIGN KEY (bonus_points_customer_id) REFERENCES bitbag_customer_bonus_points (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bitbag_bonus_points_used_customer ADD CONSTRAINT FK_8D41A6F9B96146F6 FOREIGN KEY (bonus_points_id) REFERENCES bitbag_bonus_points (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sylius_order ADD bonus_points INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bitbag_bonus_points_strategy_rule DROP FOREIGN KEY FK_FB8F6CCEB1CB0451');
        $this->addSql('ALTER TABLE bitbag_bonus_points_customer DROP FOREIGN KEY FK_5444C919B96146F6');
        $this->addSql('ALTER TABLE bitbag_bonus_points_used_customer DROP FOREIGN KEY FK_8D41A6F9B96146F6');
        $this->addSql('ALTER TABLE bitbag_bonus_points_customer DROP FOREIGN KEY FK_5444C919F7941E90');
        $this->addSql('ALTER TABLE bitbag_bonus_points_used_customer DROP FOREIGN KEY FK_8D41A6F9F7941E90');
        $this->addSql('DROP TABLE bitbag_bonus_points_strategy');
        $this->addSql('DROP TABLE bitbag_bonus_points');
        $this->addSql('DROP TABLE bitbag_bonus_points_strategy_rule');
        $this->addSql('DROP TABLE bitbag_customer_bonus_points');
        $this->addSql('DROP TABLE bitbag_bonus_points_customer');
        $this->addSql('DROP TABLE bitbag_bonus_points_used_customer');
        $this->addSql('ALTER TABLE sylius_order DROP bonus_points');
    }
}
