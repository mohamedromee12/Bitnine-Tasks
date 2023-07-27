# PostgreSQL Driver in Python - Modified to Return Data as JSON

This Python script serves as a modified PostgreSQL driver to fetch data from the "user_table" in the PostgreSQL database and return the data in JSON string format.

## Development Environment

Ensure that you have the following prerequisites installed:

- Python 3.x
- `psycopg2` library (Python PostgreSQL adapter)



## Usage

1. **Set up PostgreSQL Database**:
   - Before running the script, make sure you have a PostgreSQL database set up and running. Modify the connection parameters in the `get_data_as_json` function to match your database credentials.


2. **Install Dependencies**:
   - Open your terminal or command prompt and install the required `psycopg2` library using the following command:
     ```
     pip install psycopg2
     ```

3. **Run the Script**:
   - Save the `main.py` file in your desired directory.
   - Open your terminal or command prompt and navigate to the directory containing `main.py`.
   - Run the script using the following command:
     ```
     python main.py
     ```

4. **Output**:
   - The script will connect to the PostgreSQL database, fetch data from the `user_table`, and return the data as a JSON string in the following format:
     ```json
     {
       "status_code": 200,
       "data": [
         {"user_id": 1, "name": "John", "age": 28},
         {"user_id": 2, "name": "Tom", "age": 29, "phone": "1-800-123-1234"},
         {"user_id": 3, "name": "Jenny", "age": 34}
       ]
     }
     ```
   - If there is an error while connecting to the database, an error message will be printed.

5. **Customization (Optional)**:
   - You can modify the SQL query in the `cursor.execute` function to fetch specific data from the database according to your requirements.

6. **Cleaning Up (Optional)**:
   - After executing the script, the database connection will be closed automatically. There is no need to manually close the connection.

7. **Example Usage**:
   - The script provides an example usage in the `if __name__ == "__main__":` block. You can use this block as a reference to integrate the `get_data_as_json` function into your own application.



