 require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/q47JAnAX46bUHT10mLBXJYhk8p-yDG6F',
      accounts:['23359b273bdee6a9a1c5c39ca278c03b00bfe07265eadbcb23de89e5714921a8']

    }
  }
}