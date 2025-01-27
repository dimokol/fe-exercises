export async function fetchSubreddits() {
	try {
		const spreadsheetId = '1qabDI5lhZHa3v5kze5kC3fs23iTvPcV-Hhzhm78qGUY';
		const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'token': '6d6ee6cc334b2d6beecc8d75b0a1f61e11763378'
			},
			body: JSON.stringify({
				query: `
				{
					get (limit: 20) {
						Rank
						Name
						Status
						isOpen
					}
				}`,
			}),
		});
		
		const data = await response.json();
		return data.data.get;
	
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}