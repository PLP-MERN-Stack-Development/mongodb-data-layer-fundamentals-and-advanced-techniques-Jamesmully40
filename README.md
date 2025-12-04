# MongoDB Data Layer Fundamentals

This repository contains the solution for the Week 1 MongoDB assignment.

## Files

- `insert_books.js`: Script to populate the `plp_bookstore` database with sample book data.
- `queries.js`: Script containing all the queries required for Tasks 2, 3, 4, and 5 (CRUD, Advanced Queries, Aggregation, Indexing).

## Setup & Usage

1. **Prerequisites**: Ensure MongoDB is installed and running. You should have `mongosh` (MongoDB Shell) available in your terminal.

2. **Populate Database**:
   Run the following command to create the database and insert the books:
   ```bash
   mongosh plp_bookstore insert_books.js
   ```
   *Output should confirm: "Database seeded successfully with 15 books."*

3. **Run Queries**:
   Run the queries script to execute all tasks and see the output:
   ```bash
   mongosh plp_bookstore queries.js
   ```
   This script will output the results for:
   - Basic CRUD operations
   - Advanced filtering, sorting, and pagination
   - Aggregation pipelines (Average price, Author stats, Decades)
   - Index creation and performance explanation

## Task Details

- **Task 1**: Database `plp_bookstore` and collection `books` are created automatically by the insertion script.
- **Task 2**: CRUD operations are demonstrated in the first section of `queries.js`.
- **Task 3**: Advanced queries including stock checks, projection, sorting, and pagination are in the second section.
- **Task 4**: Aggregation pipelines for analytics are in the third section.
- **Task 5**: Indexes are created on `title` and compound index on `author` + `published_year`. `explain()` is used to show index usage.
