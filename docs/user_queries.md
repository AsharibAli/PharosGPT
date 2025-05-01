# User Queries Mapped to API Endpoints

---

1. **"Show me the latest transactions on PharosScan."**  
   - Endpoint: `/account/txlist`  

2. **"What are the latest blocks added to PharosScan?"**  
   - Endpoint: `/block/getblockreward`  

3. **"Estimate when block [BLOCK_NUMBER] will be mined."**  
   - Endpoint: `/block/getblockcountdown?blockno={BLOCK_NUMBER}`  

4. **"Find the block number mined at timestamp [TIMESTAMP]."**  
   - Endpoint: `/block/getblocknobytime?timestamp={TIMESTAMP}`  

---

### **Transaction Queries**  

1. **"Find details about transaction [TX_HASH]."**  
   - Endpoint: `/transaction/getstatus?txhash={TX_HASH}`  

2. **"Check if transaction [TX_HASH] was successful."**  
   - Endpoint: `/transaction/gettxreceiptstatus?txhash={TX_HASH}`  

3. **"What internal transactions occurred within transaction [TX_HASH]?"**  
   - Endpoint: `/account/txlistinternal?txhash={TX_HASH}`  

4. **"Show me the logs of transaction [TX_HASH]."**  
   - Endpoint: `/logs/getLogs?address={TX_HASH}`  

---

### **Block Queries**  

1. **"Fetch details about block [BLOCK_NUMBER]."**  
   - Endpoint: `/block/getblockreward?blockno={BLOCK_NUMBER}`  

2. **"Estimate when block [BLOCK_NUMBER] will be mined."**  
   - Endpoint: `/block/getblockcountdown?blockno={BLOCK_NUMBER}`  

3. **"Find the block number mined at timestamp [TIMESTAMP]."**  
   - Endpoint: `/block/getblocknobytime?timestamp={TIMESTAMP}`  

---

### **Address Queries**  

1. **"Get balance of address [ADDRESS_HASH]."**  
   - Endpoint: `/account/balance?address={ADDRESS_HASH}&tag=latest`  

2. **"Get balances for multiple addresses."**  
   - Endpoint: `/account/balancemulti?address={ADDRESS_1},{ADDRESS_2},{ADDRESS_3}&tag=latest`  

3. **"Show the transactions associated with address [ADDRESS_HASH]."**  
   - Endpoint: `/account/txlist?address={ADDRESS_HASH}`  

4. **"Show the internal transactions associated with address [ADDRESS_HASH]."**  
   - Endpoint: `/account/txlistinternal?address={ADDRESS_HASH}`  

5. **"Which blocks were validated by address [ADDRESS_HASH]?"**  
   - Endpoint: `/account/getminedblocks?address={ADDRESS_HASH}`  

---

### **Token Queries**  

1. **"List all ERC-20 token transfers for address [ADDRESS_HASH]."**  
   - Endpoint: `/account/tokentx?address={ADDRESS_HASH}`  

2. **"List all ERC-721 (NFT) token transfers for address [ADDRESS_HASH]."**  
   - Endpoint: `/account/tokennfttx?address={ADDRESS_HASH}`  

3. **"List all ERC-1155 (Multi-Token Standard) transfers for address [ADDRESS_HASH]."**  
   - Endpoint: `/account/token1155tx?address={ADDRESS_HASH}`  

---

### **Smart Contract Queries**  

1. **"Get ABI for smart contract at address [CONTRACT_ADDRESS]."**  
   - Endpoint: `/contract/getabi?address={CONTRACT_ADDRESS}`  

2. **"Retrieve the Solidity source code of smart contract [CONTRACT_ADDRESS]."**  
   - Endpoint: `/contract/getsourcecode?address={CONTRACT_ADDRESS}`  

3. **"Find the creator and deployment transaction of smart contract [CONTRACT_ADDRESS]."**  
   - Endpoint: `/contract/getcontractcreation?contractaddresses={CONTRACT_ADDRESS}`  

4. **"Verify a smart contract's source code."**  
   - Endpoint: `/contract/verifysourcecode`  

5. **"Check the verification status of contract submission [GUID]."**  
   - Endpoint: `/contract/checkverifystatus?guid={GUID}`  

---

### **NFT Queries**  

1. **"List all ERC-721 NFT transfers for address [ADDRESS_HASH]."**  
   - Endpoint: `/account/tokennfttx?address={ADDRESS_HASH}`  

2. **"List all ERC-1155 NFT transfers for address [ADDRESS_HASH]."**  
   - Endpoint: `/account/token1155tx?address={ADDRESS_HASH}`  

---

### **Additional Edge Cases**  

1. **"Show me the execution status of transaction [TX_HASH]."**  
   - Endpoint: `/transaction/getstatus?txhash={TX_HASH}`  

2. **"Check the receipt status of transaction [TX_HASH]."**  
   - Endpoint: `/transaction/gettxreceiptstatus?txhash={TX_HASH}`  
