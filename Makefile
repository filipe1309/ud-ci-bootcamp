# run tests
test-all:
	@echo "🟢 Running tests..."
	@cd exercises && npx jest


# run tests in a single exercise
# example: make test e=anagram
test:
	@echo "🟢 Running tests for exercises/$(e)/test.js ..."
	@cd exercises && npx jest exercises/$(e)/test.js --watch

# run node
run:
	@echo "🏁 Running code..."

# debug node
# example: make debug e=anagram
debug:
	@echo "🏁 Debugging code..."
	@node inspect exercises/$(e)/index.js

help:
	@echo "📖 Available commands:"
	@echo "  make test-all"
	@echo "  make test e=anagram"
	@echo "  make run"
	@echo "  make debug e=anagram"
	@echo "  make help"
