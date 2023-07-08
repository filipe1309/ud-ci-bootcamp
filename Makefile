#! /bin/sh

# run tests
test:
	@echo "Running tests..."
	@cd exercises && npx jest
