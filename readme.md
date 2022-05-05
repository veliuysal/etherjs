https://docs.ethers.io/v5/

The ethers.js is a library that aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.

Common Terminology 
--------------------

Provider => A Provider (in ethers) is a class which provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.

Signer => A Signer is a class which (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations.

Contract => A Contract is an abstraction which represents a connection to a specific contract on the Ethereum Network, so that applications can use it like a normal JavaScript object.
