IN_FILE=Seminar.tex
OUT_FILE=build/TypeScript-NiklasMollenhauer

MKDIR_P=mkdir -p

.PHONY: all
all: pdf

.PHONY: directories
directories:
	$(MKDIR_P) $(dir $(OUT_FILE))

.PHONY: pdf
pdf: directories
	latexmk -interaction=nonstopmode -halt-on-error -interaction=nonstopmode -shell-escape -pdf "-jobname=$(OUT_FILE)" "$(IN_FILE)"

.PHONY: clean
clean: directories
	rm -rvf -- $(dir $(OUT_FILE))* || true
	rm -rvf -- $(wildcard _minted-*) || true
