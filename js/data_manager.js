/**
 * Class meant to contain methods and attributes
 * for data management related operations
 */
function DataManager() {
};


DataManager.init = function() {
    var entries = ADDRESSES;
    var map = {};
    for (var i=0; i < entries.length; i++) {
        var entry = entries[i];

        var parts = entry.split(' ');
        var zip = parts[parts.length - 1]; 

        var address = entry.split(',')[1].trim();
        map[zip] = address.replace(' ' + zip, '');
    }
    DataManager.addressMap = map;
};


/**
 * Subcategory Mapping: key - label  
 */
DataManager.subcategoryMapping = {
    subcategory001: {label: 'Adoptions'},
    subcategory002: {label: 'Child Support'},
    subcategory003: {label: 'Guardianship'},
    subcategory004: {label: 'Separations'},
    subcategory005: {label: 'Child Custody and Visitation'},
    subcategory006: {label: 'Divorce'},
    subcategory007: {label: 'Paternity'},
    subcategory008: {label: 'Spousal Support or Alimony'}
};

/**
 * Category Mapping: key - label and corresponding subcategories  
 */
DataManager.categoryMapping = {
    category001: {
        label: 'Family',
        subcategories: DataManager.subcategoryMapping
    },
    category002: {
        label: 'Criminal Defense',
        subcategories: DataManager.subcategoryMapping
    },
    category003: {
        label: 'Business',
        subcategories: DataManager.subcategoryMapping
    },
    category004: {
        label: 'Personal Injury',
        subcategories: DataManager.subcategoryMapping
    },
    category005: {
        label: 'Bankruptcy &amp; Finances',
        subcategories: DataManager.subcategoryMapping
    },
    category006: {
        label: 'Products &amp; Services',
        subcategories: DataManager.subcategoryMapping
    },
    category007: {
        label: 'Employment',
        subcategories: DataManager.subcategoryMapping
    },
    category008: {
        label: 'Real Estate',
        subcategories: DataManager.subcategoryMapping
    },
    category009: {
        label: 'Immigration',
        subcategories: DataManager.subcategoryMapping
    },
    category010: {
        label: 'Wills, Trusts &amp; Estates',
        subcategories: DataManager.subcategoryMapping
    },
    category011: {
        label: 'Government',
        subcategories: DataManager.subcategoryMapping
    },
    category012: {
        label: 'Intellectual Property',
        subcategories: DataManager.subcategoryMapping
    }
};

DataManager.clientReviewEntries = [
    ['Overall', 5], 
    ['Responded in a timely manner', 4],
    ['Answered questions early', 5],
    ['Understood needs', 4],
    ['Gave complete and clear information', 5],
    ['Knowledgeable in legal area', 4], 
    ['Good value for money', 5], 
    ['Would hire again', 4],
    ['Would recommend to friend', 5]
];

/**
 * Get subcategories of the specified category code
 * 
 * @param category category code
 * 
 * @return map of subcategory information
 */
DataManager.getSubCategories = function(category) {
    var info = DataManager.getCategory(category);
    if (!info) {
        return null;
    }

    return info['subcategories'];
};

/**
 * Get category information details
 * 
 * @param category category code
 * 
 * @return category info with keys: label, subcategories
 */
DataManager.getCategory = function(category) {
    return DataManager.categoryMapping[category];
};

/**
 * Find addresses associated with the zip code
 * 
 * @param zip zip code or postal code
 *
 * @return corresponding addresses; otherwise, blank
 */
DataManager.findAddressesByZip = function(zip) {
    var map = DataManager.addressMap;

    if (zip.length < 3) {
        return null;
    }

    var address = [];
    for (var key in map) {
        if (! map.hasOwnProperty(key)) {
            continue;
        } 

        if (key.startsWith(zip)) {
            address[address.length] = map[key];
        }
    }

    if (address.length == 0) {
        address = null;
    }

    return address;
};

/**
 * Find address associated with the zip code
 * 
 * @param zip zip code or postal code
 *
 * @return corresponding address; otherwise, blank
 */
DataManager.findAddressByZip = function(zip) {
    return DataManager.addressMap[zip];
};
