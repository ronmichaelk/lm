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
    category001: {
        label: 'Criminal Defense',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Business',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Personal Injury',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Bankruptcy &amp; Finances',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Products &amp; Services',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Employment',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Real Estate',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Immigration',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Wills, Trusts &amp; Estates',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Government',
        subcategories: DataManager.subcategoryMapping
    },
    category001: {
        label: 'Intellectual Property',
        subcategories: DataManager.subcategoryMapping
    }
};

DataManager.getSubCategories = function(category) {
    return DataManager.categoryMapping[category]['subcategories'];
};
