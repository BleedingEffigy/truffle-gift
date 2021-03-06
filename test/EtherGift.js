const EtherGift = artifacts.require("./EtherGift.sol");

contract("EtherGift", accounts => {
  describe("#deposit()", ()=> {
    it("Should send ether to the deployed contract", async () => {
      const etherGift = await EtherGift.deployed();

      const val = await etherGift.deposit(accounts[1], {from: accounts[0], value: web3.toWei(2, 'ether')});
      const bal = web3.eth.getBalance(val.receipt.to);

      assert.equal(bal.toString(), web3.toWei(2, "ether"),"The ether was not recieved by the contract");
    });
  });
  describe("#withdraw()", ()=> {
    it("Should withdraw funds upon correctly answering security questions", async () => {
      const etherGift = await EtherGift.deployed();
      const prevBalance = await web3.eth.getBalance(accounts[1]);
      await etherGift.withdraw("Puerto Vallarta", "DOG",{ from: accounts[1] });

      assert.isAbove(parseInt(web3.eth.getBalance(accounts[1])), parseInt(prevBalance), "The funds were not transferred");
    });
  });
});
