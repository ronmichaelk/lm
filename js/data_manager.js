/**
 * Class meant to contain methods and attributes
 * for data management related operations
 */
function DataManager() {
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

/**
 * Get subcategories of the specified category code
 * 
 * @param category category code
 * 
 * @return map of subcategory information
 */
DataManager.getSubCategories = function(category) {
    var info = DataManager.getCategory();
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

DataManager.findAddressByZip = function(zip) {
         
};
