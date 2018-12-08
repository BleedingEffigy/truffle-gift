pragma solidity ^0.4.24;

contract EtherGift{

  bytes32 private security_question1 = hex"78f19ab08e53f0d562e23d12f65884e631af6d13878d619364d5177e39150432";
  bytes32 private security_question2 = hex"b5b35d1f7dc7cf1448a70456de4980702e1fdae4e057d31003c0e1e4b3c4bde2";
  address public owner;
  address public recipient;

  constructor() public {
    owner = msg.sender;
  }

  function deposit(address toAddress) external payable {
    require(msg.sender == owner);
    recipient = toAddress;
  }

  function withdraw(string answer1, string answer2) public {
    require(msg.sender == recipient);
    require(keccak256(abi.encodePacked(answer1)) == security_question1);
    require(keccak256(abi.encodePacked(answer2)) == security_question2);
    selfdestruct(msg.sender);
  }

}
