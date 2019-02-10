Write a JavaScript method receiving an array of objects containing name+age+gender, returning everyone between 30 and 40 years old grouped by gender. Keep it simple but reusable. Create a secret gist (https://gist.github.com/) and paste the URL below. *
<script>
function BetweenThirtyAndForty(people) { 
	for(person in people) {
		document.write(person);
	}
}

var sample = [
	{
		"name": "Jenny",
		"age": "60",
		"gender": "f"
	},
	{
		"name": "Robert",
		"age": "37",
		"gender": "m"
	},
	{
		"name": "Kyle",
		"age": "19",
		"gender": "m"
	},
	{
		"name": "Katie",
		"age": "24",
		"gender": "f"
	},
	{
		"name": "Caroline",
		"age": "39",
		"gender": "f"
	},
	{
		"name": "Vivian",
		"age": "31",
		"gender": "f"
	},
	{
		"name": "Jason",
		"age": "25",
		"gender": "m"
	},
	{
		"name": "Marco",
		"age": "30",
		"gender": "m"
	},
	{
		"name": "Maurizio",
		"age": "47",
		"gender": "m"
	},
	{
		"name": "Isabella",
		"age": "40",
		"gender": "f"
	},
	{
		"name": "Mara",
		"age": "32",
		"gender": "f"
	},
	{
		"name": "Lewis",
		"age": "27",
		"gender": "m"
	},
	{
		"name": "Maveline",
		"age": "62",
		"gender": "f"
	},
	{
		"name": "Leslie",
		"age": "31",
		"gender": "f"
	}
];
BetweenThirtyAndForty(sample);

</script>