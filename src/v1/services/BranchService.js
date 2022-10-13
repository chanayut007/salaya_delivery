const BranchRepository = require('./../repository/BranchRepository');

class BranchService {

    async getBranchNearby(latitude, longitude) {
        try {

            let data = await BranchRepository.getAllBranch();

            let result = data[0];

            return result;
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new BranchService();