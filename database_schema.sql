-- MySQL Database Schema for NRSC Upcoming Events

-- Create the database
CREATE DATABASE IF NOT EXISTS nrsc_events;
USE nrsc_events;

-- Upcoming Events Table
CREATE TABLE upcoming_events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_title VARCHAR(255) NOT NULL,
    event_description TEXT,
    event_type ENUM('Workshop', 'Conference', 'Seminar', 'Training', 'Meeting', 'Exhibition', 'Other') NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    venue VARCHAR(255),
    location VARCHAR(255),
    organizer VARCHAR(255),
    contact_person VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    registration_required BOOLEAN DEFAULT FALSE,
    registration_deadline DATE,
    max_participants INT,
    current_participants INT DEFAULT 0,
    event_status ENUM('Upcoming', 'Ongoing', 'Completed', 'Cancelled', 'Postponed') DEFAULT 'Upcoming',
    priority_level ENUM('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
    tags VARCHAR(500),
    image_url VARCHAR(500),
    external_link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    is_featured BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT TRUE,
    INDEX idx_start_date (start_date),
    INDEX idx_event_status (event_status),
    INDEX idx_event_type (event_type),
    INDEX idx_is_featured (is_featured),
    INDEX idx_is_public (is_public)
);

-- Event Categories Table (for better organization)
CREATE TABLE event_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    category_description TEXT,
    color_code VARCHAR(7) DEFAULT '#3B82F6',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Event-Category Relationship Table
CREATE TABLE event_category_relations (
    event_id INT,
    category_id INT,
    PRIMARY KEY (event_id, category_id),
    FOREIGN KEY (event_id) REFERENCES upcoming_events(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES event_categories(id) ON DELETE CASCADE
);

-- Sample data for event categories
INSERT INTO event_categories (category_name, category_description, color_code) VALUES
('Satellite Technology', 'Events related to satellite technology and applications', '#EF4444'),
('GIS & Remote Sensing', 'Geographic Information Systems and Remote Sensing workshops', '#10B981'),
('Data Processing', 'Data processing and analysis training sessions', '#F59E0B'),
('Research & Development', 'R&D related events and conferences', '#8B5CF6'),
('Public Outreach', 'Public awareness and outreach programs', '#06B6D4'),
('Internal Training', 'Internal staff training and development', '#84CC16');

-- Sample data for upcoming events
INSERT INTO upcoming_events (
    event_title, 
    event_description, 
    event_type, 
    start_date, 
    end_date, 
    start_time, 
    end_time, 
    venue, 
    location, 
    organizer, 
    contact_person, 
    contact_email, 
    contact_phone, 
    registration_required, 
    registration_deadline, 
    max_participants, 
    event_status, 
    priority_level, 
    tags, 
    image_url, 
    external_link, 
    is_featured
) VALUES
(
    'Satellite Technology Workshop',
    'Advanced workshop on satellite technology applications and recent developments in remote sensing technology. This workshop will cover practical applications and hands-on training.',
    'Workshop',
    '2025-01-15',
    '2025-01-17',
    '09:00:00',
    '17:00:00',
    'NRSC Auditorium',
    'NRSC Campus, Hyderabad',
    'NRSC Training Division',
    'Dr. Rajesh Kumar',
    'training@nrsc.gov.in',
    '+91-40-23884211',
    TRUE,
    '2025-01-10',
    50,
    'Upcoming',
    'High',
    'satellite,technology,workshop,remote-sensing',
    'https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png',
    'https://nrsc.gov.in/events/satellite-workshop',
    TRUE
),
(
    'GIS Applications Conference',
    'National conference on GIS applications in environmental monitoring and disaster management. Bringing together experts from across the country.',
    'Conference',
    '2025-02-20',
    '2025-02-22',
    '10:00:00',
    '18:00:00',
    'Hyderabad International Convention Centre',
    'Hyderabad, Telangana',
    'NRSC & ISRO',
    'Dr. Priya Sharma',
    'conference@nrsc.gov.in',
    '+91-40-23884212',
    TRUE,
    '2025-02-15',
    200,
    'Upcoming',
    'Critical',
    'gis,conference,environmental,disaster-management',
    'https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png',
    'https://nrsc.gov.in/events/gis-conference',
    TRUE
),
(
    'Remote Sensing Data Processing Training',
    'Comprehensive training program on processing and analyzing remote sensing data using advanced software tools.',
    'Training',
    '2025-03-10',
    '2025-03-12',
    '09:30:00',
    '16:30:00',
    'NRSC Computer Lab',
    'NRSC Campus, Hyderabad',
    'NRSC Technical Division',
    'Mr. Amit Patel',
    'technical@nrsc.gov.in',
    '+91-40-23884213',
    TRUE,
    '2025-03-05',
    30,
    'Upcoming',
    'Medium',
    'training,data-processing,remote-sensing',
    'https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png',
    'https://nrsc.gov.in/events/data-processing-training',
    FALSE
),
(
    'Earth Observation Satellite Launch Event',
    'Live streaming and discussion of the upcoming earth observation satellite launch and its applications.',
    'Seminar',
    '2025-04-05',
    '2025-04-05',
    '14:00:00',
    '16:00:00',
    'NRSC Auditorium',
    'NRSC Campus, Hyderabad',
    'NRSC & ISRO',
    'Dr. Suresh Reddy',
    'events@nrsc.gov.in',
    '+91-40-23884214',
    FALSE,
    NULL,
    NULL,
    'Upcoming',
    'High',
    'satellite-launch,earth-observation,seminar',
    'https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png',
    'https://nrsc.gov.in/events/satellite-launch',
    TRUE
);

-- Insert category relationships
INSERT INTO event_category_relations (event_id, category_id) VALUES
(1, 1), -- Satellite Technology Workshop -> Satellite Technology
(2, 2), -- GIS Applications Conference -> GIS & Remote Sensing
(3, 3), -- Remote Sensing Data Processing Training -> Data Processing
(4, 1); -- Earth Observation Satellite Launch Event -> Satellite Technology

-- Create a view for easy querying of upcoming events with categories
CREATE VIEW upcoming_events_with_categories AS
SELECT 
    e.*,
    GROUP_CONCAT(c.category_name) as categories,
    GROUP_CONCAT(c.color_code) as category_colors
FROM upcoming_events e
LEFT JOIN event_category_relations ecr ON e.id = ecr.event_id
LEFT JOIN event_categories c ON ecr.category_id = c.id
WHERE e.event_status = 'Upcoming' 
    AND e.is_public = TRUE
    AND e.start_date >= CURDATE()
GROUP BY e.id
ORDER BY e.start_date ASC, e.priority_level DESC;

-- Create a view for featured events
CREATE VIEW featured_events AS
SELECT * FROM upcoming_events 
WHERE is_featured = TRUE 
    AND event_status = 'Upcoming'
    AND is_public = TRUE
    AND start_date >= CURDATE()
ORDER BY start_date ASC
LIMIT 5;

-- Stored procedure to get upcoming events by type
DELIMITER //
CREATE PROCEDURE GetUpcomingEventsByType(IN event_type_param VARCHAR(50))
BEGIN
    SELECT * FROM upcoming_events 
    WHERE event_type = event_type_param 
        AND event_status = 'Upcoming'
        AND is_public = TRUE
        AND start_date >= CURDATE()
    ORDER BY start_date ASC;
END //
DELIMITER ;

-- Stored procedure to get events by date range
DELIMITER //
CREATE PROCEDURE GetEventsByDateRange(IN start_date_param DATE, IN end_date_param DATE)
BEGIN
    SELECT * FROM upcoming_events 
    WHERE start_date BETWEEN start_date_param AND end_date_param
        AND event_status = 'Upcoming'
        AND is_public = TRUE
    ORDER BY start_date ASC;
END //
DELIMITER ;

-- Trigger to update current_participants when registration changes
DELIMITER //
CREATE TRIGGER update_participant_count
BEFORE UPDATE ON upcoming_events
FOR EACH ROW
BEGIN
    IF NEW.current_participants > NEW.max_participants THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Current participants cannot exceed maximum participants';
    END IF;
END //
DELIMITER ;

-- Index for better performance
CREATE INDEX idx_event_search ON upcoming_events(event_title, event_description, tags);
CREATE INDEX idx_date_status ON upcoming_events(start_date, event_status, is_public);
