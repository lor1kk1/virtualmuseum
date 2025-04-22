let currentSection = 0;
const sections = document.querySelectorAll('.hero-container, .davinci, .michelangelo-container, .vangogh-container, .picasso-container, .footer');

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Initialize scroll position
    window.scrollTo(0, 0);
});

// Smooth scrolling functionality
let isScrolling = false;
let scrollTimeout;
let lastScrollTime = 0;
const scrollDelay = 500; // Reduced from 1000ms to 500ms for more responsive scrolling

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (isScrolling || now - lastScrollTime < scrollDelay) return;
    
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scrolling down
        currentSection++;
        scrollToSection(currentSection);
    } else if (e.deltaY < 0 && currentSection > 0) {
        // Scrolling up
        currentSection--;
        scrollToSection(currentSection);
    }
}, { passive: false });

// Touch events for mobile
let touchStartY = 0;
let touchEndY = 0;
let lastTouchTime = 0;
const touchDelay = 500; // Reduced from 1000ms to 500ms for more responsive scrolling

window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    const now = Date.now();
    if (isScrolling || now - lastTouchTime < touchDelay) return;
    
    touchEndY = e.touches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0 && currentSection < sections.length - 1) {
            // Swiping up
            currentSection++;
            scrollToSection(currentSection);
        } else if (diff < 0 && currentSection > 0) {
            // Swiping down
            currentSection--;
            scrollToSection(currentSection);
        }
        lastTouchTime = now;
    }
}, { passive: true });

// Keyboard navigation
window.addEventListener('keydown', (e) => {
    const now = Date.now();
    if (isScrolling || now - lastScrollTime < scrollDelay) return;
    
    if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
});

function scrollToSection(index) {
    if (isScrolling) return;
    
    isScrolling = true;
    lastScrollTime = Date.now();
    
    const targetSection = sections[index];
    const targetPosition = targetSection.offsetTop;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    // Reset scrolling flag after animation completes
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, scrollDelay);
}

// Artwork data for search
const artworkData = {
    'renaissance.html': {
        title: 'Renaissance Art',
        keywords: ['renaissance', 'classical', 'humanism', '15th century', '16th century'],
        artworks: [
            {
                title: 'Vitruvian Man',
                artist: 'Leonardo da Vinci',
                artistKeywords: ['leonardo', 'da vinci', 'davinci', 'leonardo davinci'],
                image: 'Vitruvian Man.jpg',
                keywords: ['drawing', 'anatomy', 'proportion', 'human figure'],
                year: '1490'
            },
            {
                title: 'The School of Athens',
                artist: 'Raphael',
                artistKeywords: ['raphael', 'raffaello', 'sanzio', 'urbino'],
                image: 'The School of Athens.jpg',
                keywords: ['fresco', 'philosophy', 'classical', 'architecture'],
                year: '1509-1511'
            },
            {
                title: 'The Tribute Money',
                artist: 'Masaccio',
                artistKeywords: ['masaccio', 'tommaso', 'cassai', 'florentine'],
                image: 'The Tribute Money.jpg',
                keywords: ['fresco', 'biblical', 'perspective', 'renaissance'],
                year: '1425'
            },
            {
                title: 'The Rape of the Sabine Women',
                artist: 'Giambologna',
                artistKeywords: ['giambologna', 'jean de boulogne', 'flemish'],
                image: 'The Rape of the Sabine Women.jpg',
                keywords: ['sculpture', 'marble', 'mythology', 'movement'],
                year: '1583'
            },
            {
                title: 'St. George',
                artist: 'Donatello',
                artistKeywords: ['donatello', 'donato di niccolò', 'florentine'],
                image: 'St. George.jpg',
                keywords: ['sculpture', 'marble', 'saint', 'renaissance'],
                year: '1415-1417'
            },
            {
                title: 'The Tempest',
                artist: 'Giorgio Barbarelli da Castelfranco',
                artistKeywords: ['giorgione', 'barbarelli', 'castelfranco'],
                image: 'the_tempest.jpg',
                keywords: ['landscape', 'storm', 'venetian', 'mystery'],
                year: '1506-1508'
            },
            {
                title: 'The Arnolfini Portrait',
                artist: 'Jan van Eyck',
                artistKeywords: ['van eyck', 'jan', 'flemish'],
                image: 'The_Arnolfini_portrait_(1434).jpg',
                keywords: ['portrait', 'marriage', 'mirror', 'flemish'],
                year: '1434'
            },
            {
                title: 'The Adoration of the Magi',
                artist: 'Gentile da Fabriano',
                artistKeywords: ['gentile', 'fabriano', 'italian'],
                image: 'adorationofthemagi.jpg',
                keywords: ['religious', 'biblical', 'gothic', 'gold'],
                year: '1423'
            }
        ]
    },
    'baroque.html': {
        title: 'Baroque Art',
        keywords: ['baroque', 'dramatic', 'ornate', '17th century', '18th century'],
        artworks: [
            { 
                title: 'Las Meninas', 
                artist: 'Diego Velázquez',
                artistKeywords: ['velazquez', 'diego rodriguez', 'silva'],
                image: 'las_meninas.jpg',
                keywords: ['portrait', 'royal', 'mirror', 'infanta'],
                year: '1656'
            },
            { 
                title: 'The Night Watch', 
                artist: 'Rembrandt',
                artistKeywords: ['rembrandt van rijn', 'van rijn', 'harmenszoon'],
                image: 'night_watch.jpg',
                keywords: ['militia', 'group portrait', 'dutch', 'amsterdam'],
                year: '1642'
            },
            { 
                title: 'The Calling of St. Matthew', 
                artist: 'Caravaggio',
                artistKeywords: ['michelangelo merisi', 'merisi', 'amerighi'],
                image: 'calling_matthew.jpg',
                keywords: ['religious', 'biblical', 'light', 'tenebrism'],
                year: '1599-1600'
            },
            {
                title: 'David',
                artist: 'Gian Lorenzo Bernini',
                artistKeywords: ['bernini', 'gian lorenzo', 'sculptor'],
                image: 'david_bernini.jpg',
                keywords: ['sculpture', 'marble', 'biblical', 'baroque'],
                year: '1623-1624'
            },
            {
                title: 'The Return of the Prodigal Son',
                artist: 'Rembrandt',
                artistKeywords: ['rembrandt van rijn', 'van rijn', 'harmenszoon'],
                image: 'return_prodigal.jpg',
                keywords: ['religious', 'biblical', 'forgiveness', 'father'],
                year: '1668'
            },
            {
                title: 'Supper at Emmaus',
                artist: 'Caravaggio',
                artistKeywords: ['michelangelo merisi', 'merisi', 'amerighi'],
                image: 'supper_emmaus.jpg',
                keywords: ['religious', 'biblical', 'light', 'tenebrism'],
                year: '1601'
            },
            {
                title: 'The Anatomy Lesson',
                artist: 'Rembrandt',
                artistKeywords: ['rembrandt van rijn', 'van rijn', 'harmenszoon'],
                image: 'anatomy_lesson.jpg',
                keywords: ['group portrait', 'medical', 'dutch', 'amsterdam'],
                year: '1632'
            },
            {
                title: 'Apollo and Daphne',
                artist: 'Gian Lorenzo Bernini',
                artistKeywords: ['bernini', 'gian lorenzo', 'sculptor'],
                image: 'apollo_daphne.jpg',
                keywords: ['sculpture', 'marble', 'mythology', 'movement'],
                year: '1622-1625'
            },
            {
                title: 'The Ecstasy of Saint Teresa',
                artist: 'Gian Lorenzo Bernini',
                artistKeywords: ['bernini', 'gian lorenzo', 'sculptor'],
                image: 'ecstasy_teresa.jpg',
                keywords: ['sculpture', 'marble', 'religious', 'mystical'],
                year: '1647-1652'
            },
            {
                title: 'San Carlo alle Quattro Fontane',
                artist: 'Francesco Borromini',
                artistKeywords: ['borromini', 'francesco', 'architect'],
                image: 'san_carlo.jpg',
                keywords: ['architecture', 'church', 'baroque', 'rome'],
                year: '1638-1646'
            },
            {
                title: 'Palace of Versailles',
                artist: 'Louis Le Vau & Jules Hardouin-Mansart',
                artistKeywords: ['le vau', 'hardouin-mansart', 'french'],
                image: 'versailles.jpg',
                keywords: ['architecture', 'palace', 'french', 'baroque'],
                year: '1661-1710'
            },
            {
                title: 'Sant\'Ivo alla Sapienza',
                artist: 'Francesco Borromini',
                artistKeywords: ['borromini', 'francesco', 'architect'],
                image: 'san_ivo.jpg',
                keywords: ['architecture', 'church', 'baroque', 'rome'],
                year: '1642-1660'
            },
            {
                title: 'The Descent from the Cross',
                artist: 'Peter Paul Rubens',
                artistKeywords: ['rubens', 'peter paul', 'flemish'],
                image: 'elevation_cross.jpg',
                keywords: ['religious', 'biblical', 'dramatic', 'flemish'],
                year: '1612-1614'
            },
            {
                title: 'Pluto and Proserpina',
                artist: 'Gian Lorenzo Bernini',
                artistKeywords: ['bernini', 'gian lorenzo', 'sculptor'],
                image: 'pluto_proserpina.jpg',
                keywords: ['sculpture', 'marble', 'mythology', 'movement'],
                year: '1621-1622'
            },
            {
                title: 'View of Delft',
                artist: 'Johannes Vermeer',
                artistKeywords: ['vermeer', 'johannes', 'dutch'],
                image: 'view_delft.jpg',
                keywords: ['landscape', 'cityscape', 'dutch', 'light'],
                year: '1660-1661'
            }
        ]
    },
    'modern.html': {
        title: 'Modern Art',
        keywords: ['modern', 'abstract', 'experimental', '20th century'],
        artworks: [
            { 
                title: 'Guernica', 
                artist: 'Pablo Picasso', 
                artistKeywords: ['picasso', 'pablo', 'spanish'],
                image: 'guernica.jpg',
                keywords: ['cubism', 'war', 'spanish civil war', 'monochrome'],
                year: '1937'
            },
            { 
                title: 'The Persistence of Memory', 
                artist: 'Salvador Dalí', 
                artistKeywords: ['dali', 'salvador', 'spanish'],
                image: 'tpom.jpg',
                keywords: ['surrealism', 'melting clocks', 'dream', 'landscape'],
                year: '1931'
            },
            {
                title: 'Composition VIII',
                artist: 'Wassily Kandinsky',
                artistKeywords: ['kandinsky', 'wassily', 'russian'],
                image: 'composition_8.jpg',
                keywords: ['abstract', 'geometric', 'colors', 'bauhaus'],
                year: '1923'
            },
            {
                title: 'The Son of Man',
                artist: 'René Magritte',
                artistKeywords: ['magritte', 'rene', 'belgian'],
                image: 'son_of_man.jpg',
                keywords: ['surrealism', 'apple', 'hat', 'mystery'],
                year: '1964'
            },
            {
                title: 'Broadway Boogie Woogie',
                artist: 'Piet Mondrian',
                artistKeywords: ['mondrian', 'piet', 'dutch'],
                image: 'broadway_boogie.jpg',
                keywords: ['abstract', 'geometric', 'new york', 'jazz'],
                year: '1942-43'
            },
            {
                title: 'Black Square',
                artist: 'Kazimir Malevich',
                artistKeywords: ['malevich', 'kazimir', 'russian'],
                image: 'black_square.jpg',
                keywords: ['suprematism', 'geometric', 'minimal', 'abstract'],
                year: '1915'
            },
            {
                title: 'The Elephant Celebes',
                artist: 'Max Ernst',
                artistKeywords: ['ernst', 'max', 'german'],
                image: 'elephant_celebes.jpg',
                keywords: ['surrealism', 'collage', 'dream', 'fantasy'],
                year: '1921'
            },
            {
                title: 'Violin and Grapes',
                artist: 'Pablo Picasso',
                artistKeywords: ['picasso', 'pablo', 'spanish'],
                image: 'violin_and_grapes.jpg',
                keywords: ['cubism', 'still life', 'musical', 'geometric'],
                year: '1912'
            },
            {
                title: 'Composition with Red, Blue and Yellow',
                artist: 'Piet Mondrian',
                artistKeywords: ['mondrian', 'piet', 'dutch'],
                image: 'yellow_red_blue.jpg',
                keywords: ['abstract', 'geometric', 'primary colors', 'neoplasticism'],
                year: '1930'
            },
            {
                title: 'The Scream',
                artist: 'Edvard Munch',
                artistKeywords: ['munch', 'edvard', 'norwegian'],
                image: 'the_scream.jpg',
                keywords: ['expressionism', 'anxiety', 'landscape', 'emotion'],
                year: '1893'
            },
            {
                title: 'The Dance',
                artist: 'Henri Matisse',
                artistKeywords: ['matisse', 'henri', 'french'],
                image: 'the_dance.jpg',
                keywords: ['fauvism', 'color', 'movement', 'dance'],
                year: '1910'
            },
            {
                title: 'No. 5, 1948',
                artist: 'Jackson Pollock',
                artistKeywords: ['pollock', 'jackson', 'american'],
                image: 'no5.jpg',
                keywords: ['abstract expressionism', 'drip painting', 'action painting'],
                year: '1948'
            },
            {
                title: 'Orange, Red, Yellow',
                artist: 'Mark Rothko',
                artistKeywords: ['rothko', 'mark', 'american'],
                image: 'orange_red_yellow.jpg',
                keywords: ['color field', 'abstract', 'rectangles', 'emotion'],
                year: '1961'
            },
            {
                title: 'Campbell\'s Soup Cans',
                artist: 'Andy Warhol',
                artistKeywords: ['warhol', 'andy', 'american'],
                image: 'campbells_soup.jpg',
                keywords: ['pop art', 'consumerism', 'repetition', 'commercial'],
                year: '1962'
            },
            {
                title: 'I was a Rich Man\'s Plaything',
                artist: 'Eduardo Paolozzi',
                artistKeywords: ['paolozzi', 'eduardo', 'scottish'],
                image: 'rich_mans_plaything.jpg',
                keywords: ['pop art', 'collage', 'consumerism', 'early pop'],
                year: '1947'
            },
            {
                title: 'One and Three Chairs',
                artist: 'Joseph Kosuth',
                artistKeywords: ['kosuth', 'joseph', 'american'],
                image: 'one_three_chairs.jpg',
                keywords: ['conceptual art', 'installation', 'language', 'meaning'],
                year: '1965'
            }
        ]
    },
    'impressionist.html': {
        title: 'Impressionist Art',
        keywords: ['impressionism', 'light', 'outdoor', '19th century'],
        artworks: [
            { 
                title: 'Starry Night', 
                artist: 'Vincent van Gogh', 
                artistKeywords: ['van gogh', 'vincent', 'dutch'],
                image: 'starrynight.jpg',
                keywords: ['night', 'stars', 'cypress', 'post-impressionism'],
                year: '1889'
            },
            { 
                title: 'Water Lilies', 
                artist: 'Claude Monet', 
                artistKeywords: ['monet', 'claude', 'french'],
                image: 'water_lilies.jpg',
                keywords: ['pond', 'garden', 'series', 'giverny'],
                year: '1916'
            },
            {
                title: 'Dance at Le Moulin de la Galette',
                artist: 'Pierre-Auguste Renoir',
                artistKeywords: ['renoir', 'pierre-auguste', 'french'],
                image: 'dance_moulin.jpg',
                keywords: ['dance', 'paris', 'outdoor', 'social scene'],
                year: '1876'
            },
            {
                title: 'Paris Street; Rainy Day',
                artist: 'Gustave Caillebotte',
                artistKeywords: ['caillebotte', 'gustave', 'french'],
                image: 'paris_street.jpg',
                keywords: ['cityscape', 'rain', 'paris', 'urban'],
                year: '1877'
            },
            {
                title: 'Luncheon on the Grass',
                artist: 'Édouard Manet',
                artistKeywords: ['manet', 'edouard', 'french'],
                image: 'luncheon_grass.jpg',
                keywords: ['outdoor', 'controversial', 'nude', 'picnic'],
                year: '1863'
            },
            {
                title: 'Sunflowers',
                artist: 'Vincent van Gogh',
                artistKeywords: ['van gogh', 'vincent', 'dutch'],
                image: 'sunflowers.jpg',
                keywords: ['still life', 'flowers', 'yellow', 'series'],
                year: '1888'
            },
            {
                title: 'Girl with a Pearl Earring',
                artist: 'Johannes Vermeer',
                artistKeywords: ['vermeer', 'johannes', 'dutch'],
                image: 'girl_pearl.jpg',
                keywords: ['portrait', 'pearl', 'dutch', 'mystery'],
                year: '1665'
            },
            {
                title: 'Wheatfield with Crows',
                artist: 'Vincent van Gogh',
                artistKeywords: ['van gogh', 'vincent', 'dutch'],
                image: 'wheatfield_crows.jpg',
                keywords: ['landscape', 'wheat', 'crows', 'sky'],
                year: '1890'
            },
            {
                title: 'Bal du moulin de la Galette',
                artist: 'Pierre-Auguste Renoir',
                artistKeywords: ['renoir', 'pierre-auguste', 'french'],
                image: 'bal_du_moulin.jpg',
                keywords: ['dance', 'paris', 'social scene', 'outdoor'],
                year: '1876'
            },
            {
                title: 'The Bridge at Argenteuil',
                artist: 'Claude Monet',
                artistKeywords: ['monet', 'claude', 'french'],
                image: 'bridge_argenteuil.jpg',
                keywords: ['landscape', 'bridge', 'water', 'reflection'],
                year: '1874'
            },
            {
                title: 'Luncheon of the Boating Party',
                artist: 'Pierre-Auguste Renoir',
                artistKeywords: ['renoir', 'pierre-auguste', 'french'],
                image: 'luncheon_boat.jpg',
                keywords: ['social scene', 'outdoor', 'party', 'boat'],
                year: '1881'
            },
            {
                title: 'Haystacks',
                artist: 'Claude Monet',
                artistKeywords: ['monet', 'claude', 'french'],
                image: 'haystacks.jpg',
                keywords: ['landscape', 'series', 'light', 'rural'],
                year: '1890'
            },
            {
                title: 'Self-Portrait with Bandaged Ear',
                artist: 'Vincent van Gogh',
                artistKeywords: ['van gogh', 'vincent', 'dutch'],
                image: 'self_portrait.jpg',
                keywords: ['portrait', 'self-portrait', 'bandage', 'ear'],
                year: '1889'
            },
            {
                title: 'Rouen Cathedral',
                artist: 'Claude Monet',
                artistKeywords: ['monet', 'claude', 'french'],
                image: 'rouen_cathedral.jpg',
                keywords: ['architecture', 'series', 'light', 'gothic'],
                year: '1894'
            }
        ]
    },
    'contemporary.html': {
        title: 'Contemporary Art',
        keywords: ['contemporary', 'modern', 'current', '21st century'],
        artworks: [
            { 
                title: 'Balloon Dog', 
                artist: 'Jeff Koons', 
                artistKeywords: ['koons', 'jeff', 'american'],
                image: 'balloon_dog.jpg',
                keywords: ['sculpture', 'stainless steel', 'pop art', 'kitsch'],
                year: '1994-2000'
            },
            { 
                title: 'The Weather Project', 
                artist: 'Olafur Eliasson', 
                artistKeywords: ['eliasson', 'olafur', 'icelandic'],
                image: 'weather_project.jpg',
                keywords: ['installation', 'light', 'sun', 'tate modern'],
                year: '2003'
            },
            {
                title: 'Girl with Balloon',
                artist: 'Banksy',
                artistKeywords: ['banksy', 'anonymous', 'british'],
                image: 'girl_balloon.jpg',
                keywords: ['street art', 'stencil', 'heart', 'shredded'],
                year: '2002'
            }
        ]
    }
};

// Artist data for lightbox
const artistData = {
    'davinci': {
        name: 'Leonardo da Vinci',
        era: 'Renaissance',
        eraLink: 'renaissance.html',
        bio: 'Leonardo da Vinci (1452-1519) was an Italian polymath of the Renaissance. He is widely considered one of the greatest painters of all time and is perhaps the most diversely talented person ever to have lived. His genius, perhaps more than that of any other figure, epitomized the Renaissance humanist ideal.',
        artworks: [
            { title: 'Mona Lisa', year: '1503-1519', image: 'mona_lisa.jpg' },
            { title: 'The Last Supper', year: '1495-1498', image: 'last_supper.jpg' },
            { title: 'Vitruvian Man', year: '1490', image: 'Vitruvian Man.jpg' },
            { title: 'Lady with an Ermine', year: '1489-1490', image: 'lady_ermine.jpg' }
        ]
    },
    'michelangelo': {
        name: 'Michelangelo',
        era: 'Renaissance',
        eraLink: 'renaissance.html',
        bio: 'Michelangelo di Lodovico Buonarroti Simoni (1475-1564) was an Italian sculptor, painter, architect, and poet of the High Renaissance. His artistic versatility was of such a high order that he is often considered a contender for the title of the archetypal Renaissance man, along with his rival and fellow Italian Leonardo da Vinci.',
        artworks: [
            { title: 'David', year: '1501-1504', image: 'david_michelangelo.jpg' },
            { title: 'The Creation of Adam', year: '1508-1512', image: 'creation_adam.jpg' },
            { title: 'Pietà', year: '1498-1499', image: 'pieta.jpg' },
            { title: 'The Last Judgment', year: '1536-1541', image: 'last_judgment.jpg' }
        ]
    },
    'vangogh': {
        name: 'Vincent van Gogh',
        era: 'Post-Impressionism',
        eraLink: 'impressionist.html',
        bio: 'Vincent Willem van Gogh (1853-1890) was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.',
        artworks: [
            { title: 'The Starry Night', year: '1889', image: 'starrynight.jpg' },
            { title: 'Sunflowers', year: '1888', image: 'sunflowers.jpg' },
            { title: 'The Bedroom', year: '1888', image: 'bedroom.jpg' },
            { title: 'Self-Portrait', year: '1889', image: 'self_portrait.jpg' }
        ]
    },
    'picasso': {
        name: 'Pablo Picasso',
        era: 'Modern',
        eraLink: 'modern.html',
        bio: 'Pablo Ruiz Picasso (1881-1973) was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.',
        artworks: [
            { title: 'Guernica', year: '1937', image: 'guernica.jpg' },
            { title: 'Les Demoiselles d\'Avignon', year: '1907', image: 'demoiselles.jpg' },
            { title: 'The Old Guitarist', year: '1903-1904', image: 'old_guitarist.jpg' },
            { title: 'Girl before a Mirror', year: '1932', image: 'girl_mirror.jpg' }
        ]
    }
};

function normalizeString(str) {
    return str.toLowerCase()
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/[^a-z0-9\s]/g, '');
}

function searchInText(text, searchTerm) {
    const normalizedText = normalizeString(text);
    const normalizedSearch = normalizeString(searchTerm);
    
    // Check for exact match first
    if (normalizedText === normalizedSearch) {
        return true;
    }
    
    // Check for partial match
    return normalizedText.includes(normalizedSearch);
}

function performSearch() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return;

    let results = [];
    const normalizedSearch = normalizeString(searchTerm);

    // Search through pages and artworks
    for (const [page, data] of Object.entries(artworkData)) {
        // Check if the page title or keywords match
        if (searchInText(data.title, searchTerm) || 
            data.keywords.some(keyword => searchInText(keyword, searchTerm))) {
            results.push({
                type: 'page',
                title: data.title,
                page: page
            });
        }

        // Check artworks
        data.artworks.forEach(artwork => {
            // Check for artist name matches (including variations)
            const artistMatch = searchInText(artwork.artist, searchTerm) ||
                              (artwork.artistKeywords && artwork.artistKeywords.some(keyword => searchInText(keyword, searchTerm)));
            
            // Check for other matches if no artist match
            if (!artistMatch) {
                const matches = searchInText(artwork.title, searchTerm) ||
                              searchInText(artwork.year, searchTerm) ||
                              artwork.keywords.some(keyword => searchInText(keyword, searchTerm));
                
                if (!matches) return;
            }
            
            results.push({
                type: 'artwork',
                title: artwork.title,
                artist: artwork.artist,
                image: artwork.image,
                page: page,
                year: artwork.year
            });
        });
    }

    // Sort results by relevance
    results.sort((a, b) => {
        // Prioritize exact matches
        const aExact = a.type === 'artwork' ? 
            (normalizeString(a.artist) === normalizedSearch || 
             normalizeString(a.title) === normalizedSearch) : 
            normalizeString(a.title) === normalizedSearch;
        
        const bExact = b.type === 'artwork' ? 
            (normalizeString(b.artist) === normalizedSearch || 
             normalizeString(b.title) === normalizedSearch) : 
            normalizeString(b.title) === normalizedSearch;
        
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // Then prioritize artist matches
        const aArtistMatch = a.type === 'artwork' && normalizeString(a.artist).includes(normalizedSearch);
        const bArtistMatch = b.type === 'artwork' && normalizeString(b.artist).includes(normalizedSearch);
        
        if (aArtistMatch && !bArtistMatch) return -1;
        if (!aArtistMatch && bArtistMatch) return 1;
        
        return 0;
    });

    // Store results and search term in localStorage
    localStorage.setItem('searchResults', JSON.stringify(results));
    localStorage.setItem('searchTerm', searchTerm);
    window.location.href = 'search-results.html';
}

// Add event listeners for search
if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing lightbox...');
    
    // Get all the necessary elements
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-image img');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxArtist = lightbox.querySelector('.lightbox-artist');
    const lightboxYear = lightbox.querySelector('.lightbox-year');
    const lightboxMedium = lightbox.querySelector('.lightbox-medium');
    const closeLightbox = lightbox.querySelector('.close-lightbox');

    // Get all the artist buttons
    const davinciBtn = document.querySelector('.btn-24');
    const michelangeloBtn = document.querySelector('.btn-25');
    const vangoghBtn = document.querySelector('.btn-26');
    const picassoBtn = document.querySelector('.btn-27');

    // Add click events to buttons
    if (davinciBtn) {
        davinciBtn.addEventListener('click', function() {
            const artworkInfo = {
                title: 'Mona Lisa',
                artist: 'Leonardo da Vinci',
                year: '1503-1519',
                medium: 'Oil on poplar panel',
                image: 'davinci.jpg'
            };
            openLightbox(artworkInfo);
        });
    }

    if (michelangeloBtn) {
        michelangeloBtn.addEventListener('click', function() {
            const artworkInfo = {
                title: 'David',
                artist: 'Michelangelo Buonarroti',
                year: '1501-1504',
                medium: 'Marble sculpture',
                image: 'michelangelo.jpg'
            };
            openLightbox(artworkInfo);
        });
    }

    if (vangoghBtn) {
        vangoghBtn.addEventListener('click', function() {
            const artworkInfo = {
                title: 'The Starry Night',
                artist: 'Vincent van Gogh',
                year: '1889',
                medium: 'Oil on canvas',
                image: 'vangogh.jpg'
            };
            openLightbox(artworkInfo);
        });
    }

    if (picassoBtn) {
        picassoBtn.addEventListener('click', function() {
            const artworkInfo = {
                title: 'Guernica',
                artist: 'Pablo Picasso',
                year: '1937',
                medium: 'Oil on canvas',
                image: 'pablo.jpg'
            };
            openLightbox(artworkInfo);
        });
    }

    // Function to open lightbox
    function openLightbox(artworkInfo) {
        console.log('Opening lightbox with:', artworkInfo);
        lightboxImg.src = artworkInfo.image;
        lightboxImg.alt = artworkInfo.title;
        lightboxTitle.textContent = artworkInfo.title;
        lightboxArtist.textContent = artworkInfo.artist;
        lightboxYear.textContent = artworkInfo.year;
        lightboxMedium.textContent = artworkInfo.medium;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox when clicking close button
    closeLightbox.addEventListener('click', function() {
        console.log('Close button clicked');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            console.log('Clicked outside lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            console.log('Escape key pressed');
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    console.log('Lightbox initialization complete');
});