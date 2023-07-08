#! /bin/sh

# run tests
test:
	@echo "🟢 Running tests..."
	@cd exercises && npx jest


# run tests in a single file
# example: make test-file file=exercise/01.test.js
test-file:
	@echo "🟢 Running tests for $(file) ..."
	@cd exercises && npx jest $(file) --watch

# run node
run:
	@echo "🏁 Running code..."

