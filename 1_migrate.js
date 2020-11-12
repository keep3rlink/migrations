
// const TestKP3RL = artifacts.require("TestKP3RL");
// const StakingPlaceholder = artifacts.require("StakingPlaceholder");
// const KP3RLGovV1 = artifacts.require("KP3RLGovV1")

// module.exports = async function (deployer) {
//     await deployer.deploy(TestKP3RL);
//     const testKP3RL = (await TestKP3RL.deployed()).address;
//     console.log("TestKP3RL deployed", testKP3RL);

//     await deployer.deploy(StakingPlaceholder, testKP3RL);
//     console.log("Staking placeholder desployed");
//     const stakingPlaceholder = (await StakingPlaceholder.deployed()).address;

//     await deployer.deploy(KP3RLGovV1, testKP3RL , stakingPlaceholder);
//     console.log("Governance deployed");

// };
