-- seed flights for local booking tests
insert into flights (source, destination, start_time, duration_minutes, price, rating) values
('Hyderabad', 'Chennai', '2000-01-01 07:00:00', 45, 4800, 4),
('Chennai', 'Hyderabad', '2000-01-01 07:30:00', 45, 5000, 4),
('Hyderabad', 'Bengaluru', '2000-01-01 08:00:00', 55, 5200, 4),
('Bengaluru', 'Hyderabad', '2000-01-01 08:10:00', 55, 5300, 4),
('Bengaluru', 'Chennai', '2000-01-01 08:30:00', 40, 4200, 4),
('Chennai', 'Bengaluru', '2000-01-01 09:00:00', 40, 4400, 4),
('Hyderabad', 'Chennai', '2000-01-01 08:00:00', 45, 5300, 5),
('Chennai', 'Hyderabad', '2000-01-01 08:30:00', 45, 5500, 5),
('Hyderabad', 'Bengaluru', '2000-01-01 09:00:00', 55, 5700, 5),
('Bengaluru', 'Hyderabad', '2000-01-01 09:10:00', 55, 5800, 5),
('Bengaluru', 'Chennai', '2000-01-01 09:30:00', 40, 4700, 5),
('Chennai', 'Bengaluru', '2000-01-01 10:00:00', 40, 4900, 5);
