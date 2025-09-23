// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ZamaTestnetContract {
    uint256 private counter;
    string private message;
    address public owner;

    constructor(string memory _message) {
        owner = msg.sender;
        counter = 0;
        message = _message;
    }

    function increment() public {
        counter++;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function setCounter(uint256 _value) public {
        require(msg.sender == owner, "Only owner can set counter");
        counter = _value;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        require(msg.sender == owner, "Only owner can set message");
        message = _message;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
