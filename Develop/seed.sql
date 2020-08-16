INSERT INTO department (name) VALUES ('Kitchen');
INSERT INTO department (name) VALUES ('FOH');
INSERT INTO department (name) VALUES ('Cleaning');

INSERT INTO roles (title, salary, department_id) VALUES ('Chef de Cuisine', 60000, 0)
INSERT INTO roles (title, salary, department_id) VALUES ('Sous-Chef', 50000, 0)
INSERT INTO roles (title, salary, department_id) VALUES ('Chef de Partie', 40000, 0)
INSERT INTO roles (title, salary, department_id) VALUES ('Saucier', 40000, 0)
INSERT INTO roles (title, salary, department_id) VALUES ('Poissonnier', 40000, 0)
INSERT INTO roles (title, salary, department_id) VALUES ('Expo/Host', 40000, 1)
INSERT INTO roles (title, salary, department_id) VALUES ('Server', 40000, 1)
INSERT INTO roles (title, salary, department_id) VALUES ('Barkeep', 40000, 1)
INSERT INTO roles (title, salary, department_id) VALUES ('Busser', 60000, 2)
INSERT INTO roles (title, salary, department_id) VALUES ('Janitor', 60000, 2)

INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Angel', 'Garcia', 0)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Sue', 'George', 1, 0)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Diane', 'Allen', 2, 1)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Bob', 'George', 3, 1)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Georgina', 'Albie', 4, 1)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Anne', 'Anderson', 5, 0)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Blob', 'Jones', 6, 5)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Sam', 'Jam', 6, 5)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Greg', 'Goose', 7, 5)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Steve', 'Webb', 8, 5)
INSERT INTO employees (first_name, surname, role_id, manager_id) VALUES ('Guy', 'Grub', 9, 0)