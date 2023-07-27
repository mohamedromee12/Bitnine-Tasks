import psycopg2
import json
from decimal import Decimal

# Custom JSON encoder to handle Decimal objects
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)

# Function to fetch data from PostgreSQL and return as a JSON string
def get_data_as_json():
    try:

        # Replace the following connection parameters with your PostgreSQL database credentials
        connection = psycopg2.connect(
            host="127.0.0.1",
            database="Bitnine",
            user="postgres",
            password="mohamedromee"
        )

        cursor = connection.cursor()

        # Execute the SQL query to fetch data from the user_table
        cursor.execute(
            "SELECT user_id, name, age, phone FROM public.user_table")

        # Fetch all the rows from the result set
        rows = cursor.fetchall()

        # Convert rows into a list of dictionaries
        data_list = []
        for row in rows:
            data = {
                "user_id": row[0],
                "name": row[1],
                "age": row[2],
                "phone": row[3]
            }
            data_list.append(data)

        # Create a dictionary with "status_code" and "data" keys
        result = {
            "status_code": 200,
            "data": data_list
        }

        # Convert the result dictionary to a JSON string using the custom encoder
        json_string = json.dumps(result, cls=DecimalEncoder)

        # Close the cursor and connection
        cursor.close()
        connection.close()

        return json_string

    except (Exception, psycopg2.Error) as error:
        # Handle the error here
        print("Error while connecting to PostgreSQL:", error)
        return None


# Example usage:
if __name__ == "__main__":
    json_output = get_data_as_json()
    if json_output:
        print(json_output)
