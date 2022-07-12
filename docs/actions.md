***

# addWhiteList

### Parameters:
* @param category - number of category
* @param pools - array of top pools with weight

### Description:

Create white list of top pools in category.

### Required Authorization:

**smart contract** account.

***

# removeWhiteList

### Parameters:

* @param category - number of category

### Description:

Remove white list by category.

### Required Authorization:

**smart contract** account.

***

***

# createProposal

### Parameters:

* @param category - number of category
* @param proposer - proposer account    
* @param new_contract - smart contract account    
* @param description - description of smart contract    
* @param vote_start - vote start date
* @param vote_end - vote end date

### Description:

Create smart contract proposal.

### Required Authorization:

**proposer** account, should be one of top pools.

***

***

# approveProposal

### Parameters:

* @param proposal_id - id of proposal

### Description:

Approve new smart contract proposal.

### Required Authorization:

**smart contract** account.

***

***

# executeProposal

### Parameters:

* @param proposal_id - id of proposal

### Description:

Execute smart contract proposal.

### Required Authorization:

**smart contract** account.

***

***

# vote

### Parameters:

* @param voter - voter account    
* @param proposal_id - id of proposal
* @param option - voting option (YES/NO)

### Description:

Vote for proposal.

### Required Authorization:

**voter** account.

***

***

# claimRewards

### Parameters:

* @param category - number of category

### Description:

Claim rewards for top pools in category.

### Required Authorization:

**any**

***