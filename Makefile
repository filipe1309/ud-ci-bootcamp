#! /bin/sh

# run tests
test:
	@echo "🟢 Running tests..."
	@cd exercises && npx jest


# run tests in a single file
# example: make test-file file=anagram/test.js
test-file:
	@echo "🟢 Running tests for exercises/$(file) ..."
	@cd exercises && npx jest exercises/$(file) --watch

# run node
run:
	@echo "🏁 Running code..."

