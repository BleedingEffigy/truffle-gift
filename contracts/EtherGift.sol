pragma solidity ^0.4.24;

contract EtherGift{

  bytes32 private security_question1 = hex"78f19ab08e53f0d562e23d12f65884e631af6d13878d619364d5177e39150432";
  address public owner;
  address public recipient;

  constructor() public {
    owner = msg.sender;
  }

  function deposit(address toAddress) external payable {
    require(msg.sender == owner);
    recipient = toAddress;
  }

}
