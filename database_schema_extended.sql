-- Extended MySQL Database Schema for NRSC Portal
-- Based on the reference image with highlights, announcements, disasters, photo gallery, and recent happenings

-- Create the database
CREATE DATABASE IF NOT EXISTS nrsc_portal;
USE nrsc_portal;

-- =============================================
-- HIGHLIGHTS OF EARTH OBSERVATION SCIENCES
-- =============================================

CREATE TABLE earth_observation_highlights (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    description TEXT,
    banner_text VARCHAR(100),
    button_text VARCHAR(50) DEFAULT 'Science Story',
    button_color VARCHAR(7) DEFAULT '#3B82F6',
    image_url VARCHAR(500),
    external_link VARCHAR(500),
    category ENUM('Chlorophyll', 'Vegetation', 'Water', 'Land', 'Atmosphere', 'Climate', 'Other') DEFAULT 'Other',
    priority_level ENUM('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    INDEX idx_category (category),
    INDEX idx_is_featured (is_featured),
    INDEX idx_is_active (is_active),
    INDEX idx_priority (priority_level)
);

-- =============================================
-- ANNOUNCEMENTS
-- =============================================

CREATE TABLE announcements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    content TEXT,
    announcement_type ENUM('Recruitment', 'Tender', 'Notice', 'Circular', 'Addendum', 'Other') DEFAULT 'Other',
    reference_number VARCHAR(100),
    date_published DATE NOT NULL,
    deadline_date DATE,
    is_new BOOLEAN DEFAULT TRUE,
    is_urgent BOOLEAN DEFAULT FALSE,
    external_link VARCHAR(500),
    file_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_type (announcement_type),
    INDEX idx_date_published (date_published),
    INDEX idx_is_new (is_new),
    INDEX idx_is_urgent (is_urgent),
    INDEX idx_is_active (is_active)
);

-- =============================================
-- DISASTERS
-- =============================================

CREATE TABLE disasters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    disaster_type ENUM('Flood', 'Earthquake', 'Landslide', 'Cyclone', 'Drought', 'Forest_Fire', 'Other') DEFAULT 'Other',
    location VARCHAR(255),
    event_date DATE,
    severity_level ENUM('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
    status ENUM('Active', 'Monitoring', 'Resolved', 'Historical') DEFAULT 'Active',
    map_url VARCHAR(500),
    report_url VARCHAR(500),
    slider_maps JSON, -- Store multiple map URLs as JSON array
    atlas_url VARCHAR(500),
    is_new BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_type (disaster_type),
    INDEX idx_event_date (event_date),
    INDEX idx_severity (severity_level),
    INDEX idx_status (status),
    INDEX idx_is_new (is_new),
    INDEX idx_is_featured (is_featured),
    INDEX idx_is_active (is_active)
);

-- =============================================
-- PHOTO GALLERY
-- =============================================

CREATE TABLE photo_gallery_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    category_description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE photo_gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    category_id INT,
    alt_text VARCHAR(255),
    caption VARCHAR(500),
    photographer VARCHAR(100),
    event_date DATE,
    location VARCHAR(255),
    tags VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES photo_gallery_categories(id) ON DELETE SET NULL,
    INDEX idx_category (category_id),
    INDEX idx_event_date (event_date),
    INDEX idx_is_featured (is_featured),
    INDEX idx_display_order (display_order),
    INDEX idx_is_active (is_active)
);

-- =============================================
-- RECENT HAPPENINGS
-- =============================================

CREATE TABLE recent_happenings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    event_type ENUM('Award', 'Conference', 'Workshop', 'Launch', 'Meeting', 'Training', 'Exhibition', 'Other') DEFAULT 'Other',
    event_date DATE,
    venue VARCHAR(255),
    organizer VARCHAR(255),
    external_link VARCHAR(500),
    image_url VARCHAR(500),
    is_new BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_type (event_type),
    INDEX idx_event_date (event_date),
    INDEX idx_is_new (is_new),
    INDEX idx_is_featured (is_featured),
    INDEX idx_is_active (is_active)
);

-- =============================================
-- SAMPLE DATA
-- =============================================

-- Earth Observation Highlights
INSERT INTO earth_observation_highlights (
    title, subtitle, description, banner_text, button_text, button_color, 
    image_url, external_link, category, priority_level, is_featured
) VALUES
(
    'Development of Chlorophyll Product',
    'Advanced chlorophyll monitoring using satellite data',
    'Development of high-resolution chlorophyll products using multi-spectral satellite data for marine ecosystem monitoring and fisheries management.',
    'Development of Chlorophyll Product',
    'Science Story',
    '#3B82F6',
    'https://www.nrsc.gov.in/sites/default/files/inline-images/chlorophyll_product.jpg',
    'https://nrsc.gov.in/science-story/chlorophyll-product',
    'Chlorophyll',
    'High',
    TRUE
),
(
    'Vegetation Index Monitoring',
    'Real-time vegetation health assessment',
    'Continuous monitoring of vegetation health and biomass using NDVI and other vegetation indices from satellite data.',
    'Vegetation Index Monitoring',
    'Science Story',
    '#10B981',
    'https://www.nrsc.gov.in/sites/default/files/inline-images/vegetation_monitoring.jpg',
    'https://nrsc.gov.in/science-story/vegetation-monitoring',
    'Vegetation',
    'Medium',
    FALSE
);

-- Announcements
INSERT INTO announcements (
    title, announcement_type, reference_number, date_published, deadline_date, 
    is_new, is_urgent, external_link
) VALUES
(
    'Extension of online applications against advertisement no. NRSC-RMT-2-2025 dated 21.06.2025 is now extended till 18.07.2025 (1700 Hrs)',
    'Recruitment',
    'NRSC-RMT-2-2025',
    '2025-06-21',
    '2025-07-18',
    TRUE,
    TRUE,
    'https://nrsc.gov.in/recruitment/rmt-2-2025'
),
(
    'Addendum dated 26.06.2025 to Advertisement No. NRSC-RMT-2-2025 dated 21.06.2025',
    'Addendum',
    'NRSC-RMT-2-2025-ADD',
    '2025-06-26',
    NULL,
    TRUE,
    FALSE,
    'https://nrsc.gov.in/recruitment/rmt-2-2025-addendum'
),
(
    'Advertisement No. NDCC DMT 2034 dated 22.06.2024',
    'Recruitment',
    'NDCC DMT 2034',
    '2024-06-22',
    '2024-07-22',
    FALSE,
    FALSE,
    'https://nrsc.gov.in/recruitment/ndcc-dmt-2034'
);

-- Disasters
INSERT INTO disasters (
    title, description, disaster_type, location, event_date, severity_level, 
    status, map_url, report_url, slider_maps, is_new, is_featured
) VALUES
(
    'Release of Flood Hazard Zonation Atlas of Assam - using multi-sensor satellite data 1998-2023',
    'Comprehensive flood hazard zonation atlas covering Assam state using multi-sensor satellite data spanning 25 years.',
    'Flood',
    'Assam, India',
    '2025-03-15',
    'High',
    'Historical',
    'https://nrsc.gov.in/disasters/flood-atlas-assam',
    'https://nrsc.gov.in/reports/flood-hazard-assam-2023',
    '["map1.jpg", "map2.jpg", "map3.jpg"]',
    TRUE,
    TRUE
),
(
    'Myanmar Earthquake: 28 March 2025 - Slider Map-1, Map-2, Map-3, Map-4, Report',
    'Comprehensive analysis and mapping of the Myanmar earthquake event with multiple damage assessment maps.',
    'Earthquake',
    'Myanmar',
    '2025-03-28',
    'Critical',
    'Active',
    'https://nrsc.gov.in/disasters/myanmar-earthquake-2025',
    'https://nrsc.gov.in/reports/myanmar-earthquake-2025',
    '["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg"]',
    TRUE,
    TRUE
),
(
    'Landslide Impact Map of Chooralmala, Wayanad, Kerala',
    'Detailed landslide impact assessment and mapping for the Chooralmala region in Wayanad district.',
    'Landslide',
    'Chooralmala, Wayanad, Kerala',
    '2025-02-10',
    'Medium',
    'Monitoring',
    'https://nrsc.gov.in/disasters/landslide-wayanad',
    'https://nrsc.gov.in/reports/landslide-wayanad-2025',
    '["landslide_map1.jpg", "landslide_map2.jpg"]',
    FALSE,
    FALSE
);

-- Photo Gallery Categories
INSERT INTO photo_gallery_categories (category_name, category_description, display_order) VALUES
('Events & Ceremonies', 'Official events, award ceremonies, and special occasions', 1),
('Training & Workshops', 'Training sessions, workshops, and capacity building programs', 2),
('Satellite Launches', 'Satellite launch events and related activities', 3),
('Conferences & Seminars', 'Scientific conferences, seminars, and technical meetings', 4),
('Field Visits', 'Field visits and site inspections', 5),
('Infrastructure', 'NRSC facilities and infrastructure', 6);

-- Photo Gallery
INSERT INTO photo_gallery (
    title, description, image_url, thumbnail_url, category_id, alt_text, caption, 
    photographer, event_date, location, tags, is_featured, display_order
) VALUES
(
    'NRSC Team Training Session',
    'Group photo of NRSC team members during a training session',
    'https://www.nrsc.gov.in/sites/default/files/gallery/training_session.jpg',
    'https://www.nrsc.gov.in/sites/default/files/gallery/thumbnails/training_session_thumb.jpg',
    2,
    'NRSC team members in training session',
    'NRSC team members participating in advanced remote sensing training',
    'NRSC Photography Team',
    '2025-03-15',
    'NRSC Campus, Hyderabad',
    'training,team,remote-sensing',
    TRUE,
    1
),
(
    'National Space Launch Event',
    'Live streaming of national space launch event with audience',
    'https://www.nrsc.gov.in/sites/default/files/gallery/space_launch.jpg',
    'https://www.nrsc.gov.in/sites/default/files/gallery/thumbnails/space_launch_thumb.jpg',
    3,
    'National space launch event projection',
    'National space launch event with live audience and projection screen',
    'ISRO Photography Team',
    '2025-02-20',
    'Satish Dhawan Space Centre',
    'launch,space,isro,projection',
    TRUE,
    2
),
(
    'GIS Day Celebration',
    'Open Source GIS Day celebration with participants',
    'https://www.nrsc.gov.in/sites/default/files/gallery/gis_day.jpg',
    'https://www.nrsc.gov.in/sites/default/files/gallery/thumbnails/gis_day_thumb.jpg',
    1,
    'GIS Day celebration event',
    'Open Source GIS Day celebration with participants and awards',
    'NRSC Photography Team',
    '2025-01-15',
    'NRSC Auditorium, Hyderabad',
    'gis,celebration,awards,open-source',
    FALSE,
    3
);

-- Recent Happenings
INSERT INTO recent_happenings (
    title, description, event_type, event_date, venue, organizer, 
    external_link, image_url, is_new, is_featured
) VALUES
(
    'Open Source GIS Day & National Geospatial Awards',
    'Celebration of Open Source GIS Day with presentation of National Geospatial Awards to outstanding professionals in the field.',
    'Award',
    '2025-01-15',
    'NRSC Auditorium, Hyderabad',
    'NRSC & ISRO',
    'https://nrsc.gov.in/events/gis-day-2025',
    'https://www.nrsc.gov.in/sites/default/files/events/gis_day_awards.jpg',
    TRUE,
    TRUE
),
(
    'Satellite Data Processing Workshop',
    'Advanced workshop on satellite data processing techniques for researchers and professionals.',
    'Workshop',
    '2025-02-10',
    'NRSC Computer Lab, Hyderabad',
    'NRSC Training Division',
    'https://nrsc.gov.in/events/data-processing-workshop',
    'https://www.nrsc.gov.in/sites/default/files/events/workshop.jpg',
    FALSE,
    FALSE
),
(
    'Earth Observation Satellite Launch',
    'Successful launch of earth observation satellite with live streaming and technical discussions.',
    'Launch',
    '2025-03-05',
    'Satish Dhawan Space Centre',
    'ISRO & NRSC',
    'https://nrsc.gov.in/events/satellite-launch-2025',
    'https://www.nrsc.gov.in/sites/default/files/events/launch.jpg',
    FALSE,
    TRUE
);

-- =============================================
-- VIEWS FOR EASY QUERYING
-- =============================================

-- View for featured highlights
CREATE VIEW featured_highlights AS
SELECT * FROM earth_observation_highlights 
WHERE is_featured = TRUE AND is_active = TRUE
ORDER BY priority_level DESC, created_at DESC
LIMIT 3;

-- View for new announcements
CREATE VIEW new_announcements AS
SELECT * FROM announcements 
WHERE is_new = TRUE AND is_active = TRUE
ORDER BY date_published DESC, is_urgent DESC
LIMIT 10;

-- View for active disasters
CREATE VIEW active_disasters AS
SELECT * FROM disasters 
WHERE status IN ('Active', 'Monitoring') AND is_active = TRUE
ORDER BY event_date DESC, severity_level DESC
LIMIT 5;

-- View for featured photos
CREATE VIEW featured_photos AS
SELECT pg.*, pgc.category_name 
FROM photo_gallery pg
LEFT JOIN photo_gallery_categories pgc ON pg.category_id = pgc.id
WHERE pg.is_featured = TRUE AND pg.is_active = TRUE
ORDER BY pg.display_order ASC, pg.created_at DESC
LIMIT 6;

-- View for recent happenings
CREATE VIEW recent_happenings_view AS
SELECT * FROM recent_happenings 
WHERE is_active = TRUE
ORDER BY event_date DESC, is_featured DESC
LIMIT 5;

-- =============================================
-- STORED PROCEDURES
-- =============================================

-- Procedure to get highlights by category
DELIMITER //
CREATE PROCEDURE GetHighlightsByCategory(IN category_param VARCHAR(50))
BEGIN
    SELECT * FROM earth_observation_highlights 
    WHERE category = category_param AND is_active = TRUE
    ORDER BY priority_level DESC, created_at DESC;
END //
DELIMITER ;

-- Procedure to get announcements by type
DELIMITER //
CREATE PROCEDURE GetAnnouncementsByType(IN type_param VARCHAR(50))
BEGIN
    SELECT * FROM announcements 
    WHERE announcement_type = type_param AND is_active = TRUE
    ORDER BY date_published DESC, is_urgent DESC;
END //
DELIMITER ;

-- Procedure to get disasters by type
DELIMITER //
CREATE PROCEDURE GetDisastersByType(IN type_param VARCHAR(50))
BEGIN
    SELECT * FROM disasters 
    WHERE disaster_type = type_param AND is_active = TRUE
    ORDER BY event_date DESC, severity_level DESC;
END //
DELIMITER ;

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- Composite indexes for better performance
CREATE INDEX idx_highlights_featured_active ON earth_observation_highlights(is_featured, is_active);
CREATE INDEX idx_announcements_new_active ON announcements(is_new, is_active);
CREATE INDEX idx_disasters_status_active ON disasters(status, is_active);
CREATE INDEX idx_photos_featured_active ON photo_gallery(is_featured, is_active);
CREATE INDEX idx_happenings_date_active ON recent_happenings(event_date, is_active);

-- Full-text search indexes
CREATE FULLTEXT INDEX ft_announcements_title ON announcements(title);
CREATE FULLTEXT INDEX ft_disasters_title ON disasters(title);
CREATE FULLTEXT INDEX ft_happenings_title ON recent_happenings(title);
