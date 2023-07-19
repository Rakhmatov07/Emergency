const {hash, compare} = require('bcrypt');

const hash_item = async(payload) => await(hash(payload, 15));
const compare_item = async(payload, encrypted_payload) => await(compare(payload, encrypted_payload));

module.exports = {
    hash_item,
    compare_item
}