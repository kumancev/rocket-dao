const RocketDAO = artifacts.require('RocketDAO')

module.exports = async function (deployer) {
  await deployer.deploy(RocketDAO)
}
