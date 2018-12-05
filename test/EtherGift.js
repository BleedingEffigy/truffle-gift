const EtherGift = artifacts.require("./EtherGift.sol");

contract("EtherGift", accounts => {
  describe("#deposit()", ()=> {
    it("Should send ether to the deployed contract", async () => {
      const etherGift = await EtherGift.deployed();

      const val = await etherGift.deposit(accounts[1], {from: accounts[0], value: web3.toWei(0.2, 'ether')});
      const bal = web3.eth.getBalance(val.receipt.to);

      assert.equal(bal.toString(), web3.toWei(0.2, "ether"),"The ether was not recieved by the contract");
    });
  });
});
