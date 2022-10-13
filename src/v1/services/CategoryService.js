const CategoryRepository = require('./../repository/CategoryRepository');

class CategoryService {

    async getAllCategory() {
        try {
            
            let result = await CategoryRepository.getAllCategory();

            return result;
            
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new CategoryService();