"use client";

import { useState, useMemo } from "react";
import { Layers3, Plus, Search, Trash2, X, CheckCircle2 } from "lucide-react";

const initialSuites = [
  {
    id: "1",
    name: "Login Regression",
    description: "Core login flows for Android and iOS",
    testCases: [
      { id: "t1", title: "Valid credentials", enabled: true },
      { id: "t2", title: "Invalid password", enabled: true },
      { id: "t3", title: "Forgot password link", enabled: false },
    ],
  },
  {
    id: "2",
    name: "Checkout Flow",
    description: "End-to-end purchase and payment",
    testCases: [
      { id: "t4", title: "Add item to cart", enabled: true },
      { id: "t5", title: "Apply coupon", enabled: false },
      { id: "t6", title: "Complete purchase", enabled: true },
    ],
  },
];

export default function TestSuitesCanvas() {
  const [suites, setSuites] = useState(initialSuites);
  const [selectedSuiteId, setSelectedSuiteId] = useState(
    initialSuites[0]?.id || null,
  );
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [newSuiteName, setNewSuiteName] = useState("");
  const [newSuiteDescription, setNewSuiteDescription] = useState("");
  const [showAddTest, setShowAddTest] = useState(false);
  const [newTestCaseTitle, setNewTestCaseTitle] = useState("");

  const filteredSuites = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return suites;
    return suites.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q),
    );
  }, [search, suites]);

  const selectedSuite = suites.find((s) => s.id === selectedSuiteId) || null;
  const totalTestCases = suites.reduce((sum, s) => sum + s.testCases.length, 0);

  const handleCreateSuite = () => {
    if (!newSuiteName.trim()) return;
    const newSuite = {
      id: Date.now().toString(),
      name: newSuiteName.trim(),
      description: newSuiteDescription.trim() || "No description",
      testCases: [],
    };
    setSuites((prev) => [...prev, newSuite]);
    setSelectedSuiteId(newSuite.id);
    setShowCreate(false);
    setNewSuiteName("");
    setNewSuiteDescription("");
  };

  const handleDeleteSuite = () => {
    if (!selectedSuite) return;
    const nextSuites = suites.filter((s) => s.id !== selectedSuite.id);
    setSuites(nextSuites);
    setSelectedSuiteId(nextSuites[0]?.id || null);
  };

  const handleAddTestCase = () => {
    if (!selectedSuite || !newTestCaseTitle.trim()) return;
    const newCase = {
      id: Date.now().toString(),
      title: newTestCaseTitle.trim(),
      enabled: true,
    };
    setSuites((prev) =>
      prev.map((s) =>
        s.id === selectedSuite.id
          ? { ...s, testCases: [...s.testCases, newCase] }
          : s,
      ),
    );
    setNewTestCaseTitle("");
    setShowAddTest(false);
  };

  const handleToggleTestCase = (caseId) => {
    if (!selectedSuite) return;
    setSuites((prev) =>
      prev.map((s) =>
        s.id === selectedSuite.id
          ? {
              ...s,
              testCases: s.testCases.map((tc) =>
                tc.id === caseId ? { ...tc, enabled: !tc.enabled } : tc,
              ),
            }
          : s,
      ),
    );
  };

  const handleDeleteTestCase = (caseId) => {
    if (!selectedSuite) return;
    setSuites((prev) =>
      prev.map((s) =>
        s.id === selectedSuite.id
          ? {
              ...s,
              testCases: s.testCases.filter((tc) => tc.id !== caseId),
            }
          : s,
      ),
    );
  };

  return (
    <div className="flex h-full flex-col bg-[#0f141b] text-white overflow-hidden">
      {/* Header */}
      <header className="flex min-h-[72px] shrink-0 items-center justify-between gap-4 border-b border-white/[0.08] px-5">
        <div>
          <div className="flex items-center gap-2">
            <Layers3 size={18} className="text-[#16f2b3]" />
            <h1 className="text-[15px] font-semibold">Test Suites</h1>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Organize and execute automated test flows
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowCreate(true)}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#16f2b3] px-3 text-xs font-semibold text-black transition hover:bg-[#22f6ba]"
        >
          <Plus size={15} />
          New Suite
        </button>
      </header>

      {/* Main content */}
      <div className="grid min-h-0 flex-1 grid-cols-[300px_1fr] overflow-hidden">
        {/* Left sidebar */}
        <aside className="flex min-h-0 flex-col border-r border-white/[0.08] bg-[#11161d]">
          <div className="border-b border-white/[0.08] p-3">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-gray-300">
                Suites
              </span>
              <span className="text-xs text-gray-500">{suites.length}</span>
            </div>
            <div className="relative">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search suites..."
                className="h-8 w-full rounded-md border border-white/[0.08] bg-[#0b1016] pl-8 pr-2 text-xs text-gray-200 outline-none placeholder:text-gray-600 focus:border-white/[0.16]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/[0.08]">
            {filteredSuites.length > 0 ? (
              <div className="space-y-1.5">
                {filteredSuites.map((suite) => (
                  <button
                    key={suite.id}
                    onClick={() => setSelectedSuiteId(suite.id)}
                    className={`w-full rounded-lg px-3 py-2.5 text-left transition ${
                      suite.id === selectedSuiteId
                        ? "bg-[#16f2b3]/10 text-[#16f2b3]"
                        : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <p className="truncate text-sm font-medium">{suite.name}</p>
                    <p className="mt-0.5 truncate text-[10px] text-gray-500">
                      {suite.description}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex h-full min-h-[180px] items-center justify-center p-5 text-center">
                <p className="text-xs text-gray-500">
                  {search ? "No suites found" : "No test suites yet"}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4 border-t border-white/[0.08] px-3 py-2 text-[10px] text-gray-500">
            <span>
              {suites.length} {suites.length === 1 ? "suite" : "suites"}
            </span>
            <span>
              {totalTestCases} {totalTestCases === 1 ? "test" : "tests"}
            </span>
          </div>
        </aside>

        {/* Right detail */}
        <main className="min-w-0 min-h-0 overflow-hidden">
          {selectedSuite ? (
            <div className="flex h-full flex-col">
              <div className="flex items-start justify-between border-b border-white/[0.08] px-5 py-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {selectedSuite.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    {selectedSuite.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddTest(true)}
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 text-xs text-gray-300 hover:bg-white/[0.06]"
                  >
                    <Plus size={13} />
                    Add Test
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteSuite}
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-red-400/30 bg-red-400/10 px-2.5 text-xs text-red-400 hover:bg-red-400/20"
                  >
                    <Trash2 size={13} />
                    Delete
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {selectedSuite.testCases.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-center">
                    <p className="text-sm text-gray-500">
                      No test cases yet. Add one to get started.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedSuite.testCases.map((tc) => (
                      <div
                        key={tc.id}
                        className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.015] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleToggleTestCase(tc.id)}
                            className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                              tc.enabled
                                ? "border-[#16f2b3] bg-[#16f2b3]/20"
                                : "border-gray-600"
                            }`}
                          >
                            {tc.enabled && (
                              <CheckCircle2
                                size={12}
                                className="text-[#16f2b3]"
                              />
                            )}
                          </button>
                          <span
                            className={`text-sm ${
                              tc.enabled ? "text-white" : "text-gray-500"
                            }`}
                          >
                            {tc.title}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteTestCase(tc.id)}
                          className="text-gray-600 hover:text-red-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <Layers3 size={30} className="mx-auto text-gray-600" />
                <p className="mt-4 text-sm font-semibold text-white">
                  No suite selected
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Select a test suite to view its test cases.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Create Suite Dialog */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl border border-white/[0.08] bg-[#0f141b] p-5">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-white">Create Suite</h3>
              <button
                onClick={() => setShowCreate(false)}
                className="text-gray-500 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <input
                value={newSuiteName}
                onChange={(e) => setNewSuiteName(e.target.value)}
                placeholder="Suite name"
                className="h-9 w-full rounded-md border border-white/[0.08] bg-[#0b1016] px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/[0.16]"
              />
              <input
                value={newSuiteDescription}
                onChange={(e) => setNewSuiteDescription(e.target.value)}
                placeholder="Description"
                className="h-9 w-full rounded-md border border-white/[0.08] bg-[#0b1016] px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/[0.16]"
              />
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowCreate(false)}
                className="h-8 rounded-md border border-white/[0.08] px-3 text-xs text-gray-400 hover:bg-white/[0.05]"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateSuite}
                className="h-8 rounded-md bg-[#16f2b3] px-3 text-xs font-semibold text-black hover:bg-[#22f6ba]"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Test Case Dialog */}
      {showAddTest && selectedSuite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl border border-white/[0.08] bg-[#0f141b] p-5">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-white">
                Add Test Case
              </h3>
              <button
                onClick={() => setShowAddTest(false)}
                className="text-gray-500 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-4">
              <input
                value={newTestCaseTitle}
                onChange={(e) => setNewTestCaseTitle(e.target.value)}
                placeholder="Test case title"
                className="h-9 w-full rounded-md border border-white/[0.08] bg-[#0b1016] px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/[0.16]"
              />
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowAddTest(false)}
                className="h-8 rounded-md border border-white/[0.08] px-3 text-xs text-gray-400 hover:bg-white/[0.05]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTestCase}
                className="h-8 rounded-md bg-[#16f2b3] px-3 text-xs font-semibold text-black hover:bg-[#22f6ba]"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
